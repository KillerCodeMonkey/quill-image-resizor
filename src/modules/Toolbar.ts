import IconAlignLeft from 'quill/assets/icons/align-left.svg?raw'
import IconAlignCenter from 'quill/assets/icons/align-center.svg?raw'
import IconAlignRight from 'quill/assets/icons/align-right.svg?raw'
import { BaseModule } from './BaseModule'
import ImageResizor from '../ImageResizor'
import type { Parchment } from 'quill'

export class Toolbar extends BaseModule {
  floatStyle: Parchment.StyleAttributor | null = null
  marginStyle: Parchment.StyleAttributor | null = null
  displayStyle: Parchment.StyleAttributor | null = null
  toolbar?: HTMLDivElement
  alignments: {
    icon: string
    apply: () => void
    isApplied: () => boolean
  }[] = []

  constructor(resizer: ImageResizor) {
    super(resizer)
    if (ImageResizor.Quill) {
      const parchment = ImageResizor.Quill.imports.parchment
      this.floatStyle = new parchment.StyleAttributor('float', 'float')
      this.marginStyle = new parchment.StyleAttributor('margin', 'margin')
      this.displayStyle = new parchment.StyleAttributor('display', 'display')
    }
  }

  onCreate = () => {
    // Setup Toolbar
    this.toolbar = document.createElement('div')
    Object.assign(this.toolbar.style, this.options.toolbarStyles)
    this.overlay?.appendChild(this.toolbar)

    // Setup Buttons
    this._defineAlignments()
    this._addToolbarButtons()
  }

  // The toolbar and its children will be destroyed when the overlay is removed
  onDestroy = () => {}

  // Nothing to update on drag because we are are positioned relative to the overlay
  onUpdate = () => {}

  _stylesSet = () => this.displayStyle && this.floatStyle && this.marginStyle

  _defineAlignments = () => {
    this.alignments = [
      {
        icon: IconAlignLeft,
        apply: () => {
          if (!this.img) {
            return
          }
          this.displayStyle?.add(this.img, 'inline')
          this.floatStyle?.add(this.img, 'left')
          this.marginStyle?.add(this.img, '0 1em 1em 0')
        },
        isApplied: () => {
          if (!this.img) {
            return false
          }
          return this.floatStyle?.value(this.img) === 'left'
        }
      },
      {
        icon: IconAlignCenter,
        apply: () => {
          if (!this.img) {
            return
          }
          this.displayStyle?.add(this.img, 'block')
          this.floatStyle?.remove(this.img)
          this.marginStyle?.add(this.img, 'auto')
        },
        isApplied: () => {
          if (!this.img) {
            return false
          }
          return this.marginStyle?.value(this.img) === 'auto'
        }
      },
      {
        icon: IconAlignRight,
        apply: () => {
          if (!this.img) {
            return false
          }
          this.displayStyle?.add(this.img, 'inline')
          this.floatStyle?.add(this.img, 'right')
          this.marginStyle?.add(this.img, '0 0 1em 1em')
        },
        isApplied: () => {
          if (!this.img) {
            return false
          }
          return this.floatStyle?.value(this.img) === 'right'
        }
      }
    ]
  }

  _addToolbarButtons = () => {
    const buttons: HTMLSpanElement[] = []
    this.alignments.forEach((alignment, idx) => {
      const button = document.createElement('span')
      buttons.push(button)
      button.innerHTML = alignment.icon
      button.addEventListener('click', () => {
        // deselect all buttons
        buttons.forEach((button) => (button.style.filter = ''))
        if (alignment.isApplied()) {
          // If applied, unapply
          if (this.img) {
            this.floatStyle?.remove(this.img)
            this.marginStyle?.remove(this.img)
            this.displayStyle?.remove(this.img)
          }
        } else {
          // otherwise, select button and apply
          this._selectButton(button)
          alignment.apply()
        }
        // image may change position; redraw drag handles
        this.requestUpdate()
      })
      Object.assign(button.style, this.options.toolbarButtonStyles)
      if (idx > 0) {
        button.style.borderLeftWidth = '0'
      }
      Object.assign((button.children[0] as HTMLOrSVGImageElement).style, this.options.toolbarButtonSvgStyles)
      if (alignment.isApplied()) {
        // select button if previously applied
        this._selectButton(button)
      }
      this.toolbar?.appendChild(button)
    })
  }

  _selectButton = (button) => {
    button.style.filter = 'invert(20%)'
  }
}
