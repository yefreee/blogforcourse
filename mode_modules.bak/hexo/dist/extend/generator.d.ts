declare class Generator {
    id: any;
    store: any;
    constructor();
    list(): any;
    get(name: string): any;
    register(name: any, fn: any): void;
}
export = Generator;