declare class Locals {
    cache: any;
    getters: any;
    constructor();
    get(name: any): any;
    set(name: any, value: any): this;
    remove(name: any): this;
    invalidate(): this;
    toObject(): {};
}
export = Locals;