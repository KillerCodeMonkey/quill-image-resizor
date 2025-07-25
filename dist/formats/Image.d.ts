export declare const createResizeImageFormat: (Quill: any) => {
    new (): {
        [x: string]: any;
        format(name: string, value: string): void;
    };
    [x: string]: any;
    blotName: string;
    tagName: string;
    internalName: string;
    allowedFormatAttributesList: string[];
    create(value: any): HTMLImageElement;
    formats(domNode: HTMLImageElement): Record<string, string>;
    match(url: any): boolean;
    sanitize(url: any): any;
    value(domNode: HTMLImageElement): any;
};
