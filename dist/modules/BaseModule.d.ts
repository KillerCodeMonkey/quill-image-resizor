import { ImageResizorOptions } from '../DefaultOptions';
import { default as ImageResizor } from '../ImageResizor';
export declare abstract class BaseModule {
    overlay?: HTMLDivElement;
    img?: HTMLImageElement;
    options: ImageResizorOptions;
    requestUpdate: () => void;
    constructor(resizer: ImageResizor);
    onCreate: () => void;
    onDestroy: () => void;
    onUpdate: () => void;
}
