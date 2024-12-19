import { default as ImageResizor } from '../ImageResizor';
import { BaseModule } from './BaseModule';
export declare class Resize extends BaseModule {
    boxes: HTMLDivElement[];
    dragBox: HTMLDivElement | null;
    dragStartX: number;
    preDragWidth: number;
    constructor(imageResizor: ImageResizor);
    onCreate: () => void;
    onDestroy: () => void;
    positionBoxes: () => void;
    addBox: (cursor: any) => void;
    handleMousedown: (evt: MouseEvent) => void;
    handleMouseup: () => void;
    handleDrag: (evt: any) => void;
    setCursor: (value: any) => void;
}
