declare class Processor {
    store: any;
    constructor();
    list(): any;
    register(pattern: any, fn: any): void;
}
export = Processor;