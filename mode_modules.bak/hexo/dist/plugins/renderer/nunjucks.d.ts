declare function njkRenderer(data: any, locals: any): any;
declare namespace njkRenderer {
    var compile: (data: any) => (locals: any) => any;
}
export = njkRenderer;