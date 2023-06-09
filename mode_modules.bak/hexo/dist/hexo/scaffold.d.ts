declare class Scaffold {
    context: any;
    scaffoldDir: any;
    defaults: any;
    constructor(context: any);
    _listDir(): import("bluebird")<{
        name: any;
        path: string;
    }[]>;
    _getScaffold(name: any): import("bluebird")<{
        name: any;
        path: string;
    }>;
    get(name: any, callback: any): import("bluebird")<any>;
    set(name: any, content: any, callback: any): import("bluebird")<void>;
    remove(name: any, callback: any): import("bluebird")<void>;
}
export = Scaffold;