import { default as ImageResizor } from '../ImageResizor';
import { BaseModule } from './BaseModule';
export declare class DisplaySize extends BaseModule {
    display: HTMLDivElement | null;
    constructor(imageResizor: ImageResizor);
    onCreate: () => void;
    onDestroy: () => void;
    onUpdate: () => void;
    getCurrentSize: () => number[];
}
