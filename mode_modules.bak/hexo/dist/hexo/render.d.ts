declare class Render {
    context: any;
    renderer: any;
    constructor(ctx: any);
    isRenderable(path: any): any;
    isRenderableSync(path: any): any;
    getOutput(path: any): any;
    getRenderer(ext: any, sync?: any): any;
    getRendererSync(ext: any): any;
    render(data: any, options: any, callback: any): any;
    renderSync(data: any, options?: {}): any;
}
export = Render;