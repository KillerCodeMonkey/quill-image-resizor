import { sanitize } from 'quill/formats/link'
const ImageFormatAttributesList = ['alt', 'height', 'width', 'style']
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createResizeImageFormat = (Quill: any) => {
  const EmbedBlot = Quill.import('blots/block/embed')
  return class ResizorImageFormat extends EmbedBlot {
    static blotName = 'image'
    static tagName = 'IMG'
    static internalName = 'ResizorImageFormat'

    static allowedFormatAttributesList = ImageFormatAttributesList

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static create(value: any): HTMLImageElement {
      const node = super.create(value) as HTMLImageElement
      if (typeof value === 'string') {
        // Handle string URLs (from uploads)
        node.setAttribute('src', value)
      } else if (typeof value === 'object' && value !== null) {
        // Handle object with src and other attributes
        if (value.src) {
          node.setAttribute('src', value.src)
        }

        // Apply other attributes
        this.allowedFormatAttributesList.forEach((attr) => {
          if (value[attr]) {
            node.setAttribute(attr, value[attr] ?? '')
          }
        })
      }
      return node
    }

    static formats(domNode: HTMLImageElement): Record<string, string> {
      return this.allowedFormatAttributesList.reduce((formats: Record<string, string>, attribute) => {
        if (domNode.hasAttribute(attribute)) {
          formats[attribute] = domNode.getAttribute(attribute) || ''
        }
        return formats
      }, {})
    }

    static match(url) {
      return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
    }
    static sanitize(url) {
      return sanitize(url, ['http', 'https', 'data']) ? url : '//:0'
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static value(domNode: HTMLImageElement): any {
      const src = domNode.getAttribute('src')
      if (!src) return null

      const formats = this.formats(domNode)

      // If only src exists, return just the string (preserves upload compatibility)
      const hasCustomAttributes = Object.keys(formats).length > 0
      if (!hasCustomAttributes) {
        return src
      }
      // Return object with src and custom attributes
      return {
        src,
        ...formats
      }
    }

    format(name: string, value: string): void {
      if (ResizorImageFormat.allowedFormatAttributesList.indexOf(name) > -1) {
        const domNode = this.domNode as HTMLImageElement
        if (value) {
          domNode.setAttribute(name, value)
        } else {
          domNode.removeAttribute(name)
        }
      } else {
        super.format(name, value)
      }
    }
  }
}
