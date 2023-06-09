import Promise from 'bluebird';
interface FilterOptions {
    context?: any;
    args?: any;
}
interface StoreFunction {
    (...args: any[]): any;
    priority?: number;
}
interface Store {
    [key: string]: StoreFunction[];
}
declare class Filter {
    store: Store;
    constructor();
    list(): Store;
    list(type: string): StoreFunction[];
    register(fn: StoreFunction, priority: number): any;
    unregister(type: string, fn: StoreFunction): void;
    exec(type: string, data: any, options?: FilterOptions): Promise<any>;
    execSync(type: string, data: any, options?: FilterOptions): any;
}
export = Filter;