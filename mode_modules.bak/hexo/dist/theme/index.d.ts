import Box from '../box';
declare class Theme extends Box {
    config: any;
    views: any;
    i18n: any;
    View: any;
    constructor(ctx: any, options?: any);
    getView(path: any): any;
    setView(path: any, data: any): void;
    removeView(path: any): void;
}
export = Theme;