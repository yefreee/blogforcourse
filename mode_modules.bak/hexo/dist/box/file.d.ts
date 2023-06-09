/// <reference types="node" />
declare class File {
    source: any;
    path: any;
    params: any;
    type: any;
    static TYPE_CREATE: 'create';
    static TYPE_UPDATE: 'update';
    static TYPE_SKIP: 'skip';
    static TYPE_DELETE: 'delete';
    constructor({ source, path, params, type }: {
        source: any;
        path: any;
        params: any;
        type: any;
    });
    read(options: any): import("bluebird")<string | Buffer>;
    readSync(options: any): string | Buffer;
    stat(options: any): import("bluebird")<fs.Stats>;
    statSync(options: any): any;
}
export = File;