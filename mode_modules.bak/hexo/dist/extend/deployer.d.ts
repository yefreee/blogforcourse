declare class Deployer {
    store: any;
    constructor();
    list(): any;
    get(name: string): any;
    register(name: string, fn: any): void;
}
export = Deployer;