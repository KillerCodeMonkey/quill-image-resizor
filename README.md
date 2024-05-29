# Quill ImageResizer Module

A module for Quill rich text editor to allow images to be resized.

Fork and adaptions for quill 2 of [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module).

## Demo

- checkout / download
- `npm i` && `npm run build`
- open `demo.html`

## Usage

### Webpack/ES6

```javascript
import Quill from 'quill'
import { ImageResizer } from 'quill-image-resizer'

Quill.register('modules/imageResizerr', ImageResizer)

const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    imageResizer: {
      // See optional "config" below
    }
  }
})
```

### Script Tag

Copy image-resize.min.js into your web root or include from node_modules

```html
<script src="/node_modules/quill-image-resize-module/image-resize.min.js"></script>
```

```javascript
var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    ImageResizer: {
      // See optional "config" below
    }
  }
})
```

### Config

For the default experience, pass an empty object, like so:

```javascript
var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    ImageResizer: {}
  }
})
```

Functionality is broken down into modules, which can be mixed and matched as you like. For example,
the default is to include all modules:

```javascript
const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    ImageResizer: {
      modules: ['Resize', 'DisplaySize', 'Toolbar']
    }
  }
})
```

Each module is described below.

#### `Resize` - Resize the image

Adds handles to the image's corners which can be dragged with the mouse to resize the image.

The look and feel can be controlled with options:

```javascript
var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    ImageResizer: {
      // ...
      handleStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: white
        // other camelCase styles for size display
      }
    }
  }
})
```

#### `DisplaySize` - Display pixel size

Shows the size of the image in pixels near the bottom right of the image.

The look and feel can be controlled with options:

```javascript
var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    ImageResizer: {
      // ...
      displayStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: white
        // other camelCase styles for size display
      }
    }
  }
})
```

#### `Toolbar` - Image alignment tools

Displays a toolbar below the image, where the user can select an alignment for the image.

The look and feel can be controlled with options:

```javascript
var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    ImageResizer: {
      // ...
      toolbarStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: white
        // other camelCase styles for size display
      },
      toolbarButtonStyles: {
        // ...
      },
      toolbarButtonSvgStyles: {
        // ...
      }
    }
  }
})
```

#### `BaseModule` - Include your own custom module

You can write your own module by extending the `BaseModule` class, and then including it in
the module setup.

For example,

```javascript
import { Resize, BaseModule } from 'quill-image-resize-module'

class MyModule extends BaseModule {
  // See src/modules/BaseModule.js for documentation on the various lifecycle callbacks
}

var quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    ImageResizer: {
      modules: [MyModule, Resize]
      // ...
    }
  }
})
```
