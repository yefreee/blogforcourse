interface Options {
    context?: any;
    args?: any;
}
interface StoreFunction {
    (...args: any[]): any;
    priority?: number;
}
interface Store {
    [key: string]: StoreFunction;
}
declare class SyntaxHighlight {
    store: Store;
    constructor();
    register(name: string, fn: StoreFunction): void;
    query(name: string): StoreFunction;
    exec(name: string, options: Options): any;
}
export = SyntaxHighlight;