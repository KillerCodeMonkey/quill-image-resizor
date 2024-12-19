import { BaseModule } from './BaseModule';
import { default as ImageResizor } from '../ImageResizor';
import { Parchment } from 'quill';
export declare class Toolbar extends BaseModule {
    floatStyle: Parchment.StyleAttributor | null;
    marginStyle: Parchment.StyleAttributor | null;
    displayStyle: Parchment.StyleAttributor | null;
    toolbar?: HTMLDivElement;
    alignments: {
        icon: string;
        apply: () => void;
        isApplied: () => boolean;
    }[];
    constructor(resizer: ImageResizor);
    onCreate: () => void;
    onDestroy: () => void;
    onUpdate: () => void;
    _stylesSet: () => Parchment.StyleAttributor | null;
    _defineAlignments: () => void;
    _addToolbarButtons: () => void;
    _selectButton: (button: any) => void;
}
