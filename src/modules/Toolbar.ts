import IconAlignLeft from 'quill/assets/icons/align-left.svg?raw'
import IconAlignCenter from 'quill/assets/icons/align-center.svg?raw'
import IconAlignRight from 'quill/assets/icons/align-right.svg?raw'
import { BaseModule } from './BaseModule'
import ImageResizor from '../ImageResizor'

export class Toolbar extends BaseModule {
  toolbar?: HTMLDivElement
  alignments: {
    className?: string
    icon: string
    apply: () => void
    isApplied: () => boolean
  }[] = []

  constructor(resizer: ImageResizor) {
    super(resizer)
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

  _defineAlignments = () => {
    this.alignments = [
      {
        icon: IconAlignLeft,
        apply: () => {
          if (!this.img?.parentElement) {
            return
          }
          this.img.parentElement.classList.remove('ql-align-center')
          this.img.parentElement.classList.remove('ql-align-right')
        },
        isApplied: () => {
          if (!this.img?.parentElement) {
            return false
          }
          return (
            !this.img.parentElement.classList.contains('ql-align-center') &&
            !this.img.parentElement.classList.contains('ql-align-right')
          )
        }
      },
      {
        className: 'ql-align-center',
        icon: IconAlignCenter,
        apply: () => {
          if (!this.img?.parentElement) {
            return
          }
          this.img.parentElement.classList.add('ql-align-center')
          this.img.parentElement.classList.remove('ql-align-right')
        },
        isApplied: () => {
          if (!this.img?.parentElement) {
            return false
          }
          return this.img.parentElement.classList.contains('ql-align-center')
        }
      },
      {
        className: 'ql-align-right',
        icon: IconAlignRight,
        apply: () => {
          if (!this.img?.parentElement) {
            return
          }
          this.img.parentElement.classList.add('ql-align-right')
          this.img.parentElement.classList.remove('ql-align-center')
        },
        isApplied: () => {
          if (!this.img?.parentElement) {
            return false
          }
          return this.img.parentElement.classList.contains('ql-align-right')
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
          if (this.img?.parentElement && alignment.className) {
            this.img.parentElement.classList.remove(alignment.className)
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
