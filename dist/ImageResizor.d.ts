import { default as Quill } from 'quill';
import { ImageResizorOptions } from './DefaultOptions';

/**
 * Custom module for quilljs to allow user to resize <img> elements
 * (Works on Chrome, Edge, Safari and replaces Firefox's native resize behavior)
 * @see https://quilljs.com/blog/building-a-custom-module/
 */
export default class ImageResizor {
    quill: Quill;
    options: ImageResizorOptions;
    overlay?: HTMLDivElement;
    img?: HTMLImageElement;
    moduleClasses: string[];
    modules: {
        onCreate: () => void;
        onUpdate: () => void;
        onDestroy: () => void;
    }[];
    static QuillFind: any;
    constructor(quill: Quill, options?: ImageResizorOptions);
    initializeModules(): void;
    onUpdate: () => void;
    removeModules: () => void;
    handleClick: (evt: Event) => void;
    show: (img: HTMLImageElement) => void;
    showOverlay: () => void;
    hideOverlay: () => void;
    repositionElements: () => void;
    hide: () => void;
    setUserSelect: (value: string | number) => void;
    checkImageKeyUp: (evt: KeyboardEvent) => void;
    checkImageInput: (evt: Event) => void;
}
