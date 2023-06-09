declare class Renderer {
    store: any;
    storeSync: any;
    constructor();
    list(sync: any): any;
    get(name: any, sync?: any): any;
    isRenderable(path: any): boolean;
    isRenderableSync(path: any): boolean;
    getOutput(path: any): any;
    register(name: any, output: any, fn: any, sync: any): void;
}
export = Renderer;