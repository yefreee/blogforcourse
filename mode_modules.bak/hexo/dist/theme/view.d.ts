declare class Options {
    layout?: any;
}
declare class View {
    path: any;
    source: any;
    _theme: any;
    data: any;
    _compiled: any;
    _compiledSync: any;
    _helper: any;
    _render: any;
    layout: any;
    _content: any;
    constructor(path: any, data: any);
    render(options: Options | Function, callback: any): any;
    renderSync(options?: Options): any;
    _buildLocals(locals: any): any;
    _bindHelpers(locals: any): any;
    _resolveLayout(name: any): any;
    _precompile(): void;
}
export = View;