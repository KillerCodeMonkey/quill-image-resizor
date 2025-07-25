import DefaultOptions from './DefaultOptions'
import { DisplaySize } from './modules/DisplaySize'
import { Toolbar } from './modules/Toolbar'
import { Resize } from './modules/Resize'
import type Quill from 'quill'
import type { ImageResizorOptions } from './DefaultOptions'
import type { Parchment } from 'quill'
import { createResizeImageFormat } from './formats/Image'

const userSelects = Object.freeze(['userSelect', 'mozUserSelect', 'webkitUserSelect', 'msUserSelect'])

const knownModules = { DisplaySize, Toolbar, Resize }

/**
 * Custom module for quilljs to allow user to resize <img> elements
 * (Works on Chrome, Edge, Safari and replaces Firefox's native resize behavior)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
export default class ImageResizor {
  quill: Quill
  options: ImageResizorOptions
  overlay?: HTMLDivElement
  img?: HTMLImageElement
  moduleClasses: string[] = []
  modules: {
    onCreate: () => void
    onUpdate: () => void
    onDestroy: () => void
  }[] = []

  static floatStyle: Parchment.StyleAttributor | null = null
  static marginStyle: Parchment.StyleAttributor | null = null
  static displayStyle: Parchment.StyleAttributor | null = null

  static Quill = window['Quill'] ?? null

  constructor(quill: Quill, options: ImageResizorOptions = {}) {
    if (!ImageResizor.Quill) {
      throw `ImageResizor.Quill not set.`
    }

    this.initializeModules = this.initializeModules.bind(this)
    // register image format
    if (ImageResizor.Quill.import('formats/image')?.internalName !== 'ResizorImageFormat') {
      ImageResizor.Quill.register('formats/image', createResizeImageFormat(ImageResizor.Quill))
    }
    // register custom styles
    if (!ImageResizor.floatStyle || !ImageResizor.displayStyle || !ImageResizor.marginStyle) {
      const Parchment = ImageResizor.Quill.imports.parchment
      ImageResizor.floatStyle = new Parchment.StyleAttributor('float', 'float')
      ImageResizor.displayStyle = new Parchment.StyleAttributor('display', 'display')
      ImageResizor.marginStyle = new Parchment.StyleAttributor('margin', 'margin')
    }
    // save the quill reference and options
    this.quill = quill

    // Apply options to default options
    this.options = {
      modules: options.modules?.length ? options.modules : DefaultOptions.modules,
      displayStyles: { ...DefaultOptions.displayStyles, ...options.displayStyles },
      handleStyles: { ...DefaultOptions.handleStyles, ...options.handleStyles },
      overlayStyles: { ...DefaultOptions.overlayStyles, ...options.overlayStyles },
      toolbarButtonStyles: { ...DefaultOptions.toolbarButtonStyles, ...options.toolbarButtonStyles },
      toolbarButtonSvgStyles: { ...DefaultOptions.toolbarButtonSvgStyles, ...options.toolbarButtonSvgStyles },
      toolbarStyles: { ...DefaultOptions.toolbarStyles, ...options.toolbarStyles }
    }

    // (see above about moduleClasses)
    if (options.modules?.length) {
      this.moduleClasses = options.modules.slice()
    }

    // respond to clicks inside the editor
    this.quill!.root.addEventListener('click', this.handleClick, false)
    const parent = this.quill!.root.parentNode! as HTMLElement

    parent.style.position = parent.style.position || 'relative'

    this.modules = []

    this.moduleClasses = this.options.modules || []
  }

  initializeModules() {
    this.removeModules()

    this.modules = this.moduleClasses?.map((ModuleClass) => new (knownModules[ModuleClass] || ModuleClass)(this)) || []

    this.modules.forEach((module) => {
      module.onCreate()
    })

    this.onUpdate()
  }

  onUpdate = () => {
    this.repositionElements()
    this.modules.forEach((module) => {
      module.onUpdate()
    })
  }

  removeModules = () => {
    this.modules.forEach((module) => {
      module.onDestroy()
    })

    this.modules = []
  }

  handleClick = (evt: Event) => {
    const target = evt.target as HTMLImageElement
    if (target?.tagName?.toUpperCase() === 'IMG') {
      if (this.img === target) {
        // we are already focused on this image
        return
      }
      if (this.img) {
        // we were just focused on another image
        this.hide()
      }
      // clicked on an image inside the editor
      this.show(target)
    } else if (this.img) {
      // clicked on a non image
      this.hide()
    }
  }

  show = (img: HTMLImageElement) => {
    // keep track of this img element
    this.img = img

    this.showOverlay()

    this.initializeModules()
  }

  showOverlay = () => {
    if (this.overlay) {
      this.hideOverlay()
    }

    this.quill.setSelection(null)

    // prevent spurious text selection
    this.setUserSelect('none')

    // listen for the image being deleted, moved or window resized
    document.addEventListener('keyup', this.checkImageKeyUp, true)
    this.quill.root.addEventListener('input', this.checkImageInput, true)
    window.addEventListener('resize', this.repositionElements)

    // Create and add the overlay
    this.overlay = document.createElement('div')
    this.overlay.classList.add('ql-image-resizor')
    Object.assign(this.overlay.style, this.options.overlayStyles)

    this.quill.root.parentNode!.appendChild(this.overlay)
    this.repositionElements()
  }

  hideOverlay = () => {
    if (!this.overlay) {
      return
    }

    // Remove the overlay
    this.quill.root.parentNode!.removeChild(this.overlay)
    this.overlay = undefined

    // stop listening for image deletion, movement or resize
    document.removeEventListener('keyup', this.checkImageKeyUp)
    this.quill.root.removeEventListener('input', this.checkImageInput)
    window.removeEventListener('resize', this.repositionElements)

    // reset user-select
    this.setUserSelect('')
  }

  repositionElements = () => {
    if (!this.overlay || !this.img) {
      return
    }

    // position the overlay over the image
    const parent = this.quill.root.parentNode as HTMLElement
    const imgRect = this.img.getBoundingClientRect()
    const containerRect = parent!.getBoundingClientRect()

    Object.assign(this.overlay.style, {
      left: `${imgRect.left - containerRect.left - 1 + parent.scrollLeft}px`,
      top: `${imgRect.top - containerRect.top + parent.scrollTop}px`,
      width: `${imgRect.width}px`,
      height: `${imgRect.height}px`
    })
  }

  hide = () => {
    this.hideOverlay()
    this.removeModules()
    this.img = undefined
  }

  setUserSelect = (value: string | number) => {
    userSelects.forEach((prop) => {
      // set on contenteditable element and <html>
      this.quill.root.style[prop] = value
      document.documentElement.style[prop] = value
    })
  }

  checkImageKeyUp = (evt: KeyboardEvent) => {
    if (this.img) {
      if (['Backspace', 'Delete'].includes(evt.code)) {
        const blot = ImageResizor.Quill?.find(this.img)
        if (blot) blot.deleteAt(0)
      }
      this.hide()
    }
  }

  checkImageInput = (evt: Event) => {
    if (this.img) {
      if (['deleteContentForward', 'deleteContentBackward'].includes((evt as InputEvent).inputType)) {
        const blot = ImageResizor.Quill?.find(this.img)
        if (blot) blot.deleteAt(0)
      }
      this.hide()
    }
  }
}

// Register module
window['Quill']?.register('modules/imageResizor', ImageResizor)
