declare class Injector {
    store: any;
    cache: any;
    page: any;
    constructor();
    list(): any;
    get(entry: any, to?: string): unknown[];
    getText(entry: any, to?: string): string;
    getSize(entry: any): any;
    register(entry: any, value: any, to?: string): void;
    _getPageType(pageLocals: any): string;
    _injector(input: any, pattern: any, flag: any, isBegin: boolean, currentType: any): any;
    exec(data: any, locals?: {
        page: {};
    }): any;
}
export = Injector;