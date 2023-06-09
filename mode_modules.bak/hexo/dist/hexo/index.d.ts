/// <reference types="node" />
/// <reference types="node" />
import Promise from 'bluebird';
import Database from 'warehouse';
import { EventEmitter } from 'events';
import Module from 'module';
interface Args {
    debug?: any;
    safe?: any;
    silent?: any;
    _?: any[];
    output?: any;
    config?: any;
}
declare module 'module' {
    function _nodeModulePaths(path: string): string[];
    function _resolveFilename(request: string, parent: Module, isMain?: any, options?: any): string;
    const _extensions: NodeJS.RequireExtensions, _cache: any;
}
declare class Hexo extends EventEmitter {
    base_dir: any;
    public_dir: any;
    source_dir: any;
    plugin_dir: any;
    script_dir: any;
    scaffold_dir: any;
    theme_dir: any;
    theme_script_dir: any;
    env: any;
    extend: any;
    config: any;
    log: any;
    render: any;
    route: any;
    post: any;
    scaffold: any;
    _dbLoaded: any;
    _isGenerating: any;
    database: Database;
    config_path: any;
    source: any;
    theme: any;
    locals: any;
    version: any;
    emit: any;
    _watchBox: any;
    page: any;
    path: any;
    url: any;
    layout: any;
    view_dir: any;
    site: any;
    args: any;
    cache: any;
    alias: any;
    data: any;
    lib_dir: string;
    core_dir: string;
    static lib_dir: string;
    static core_dir: string;
    static version: string;
    constructor(base?: string, args?: Args);
    _bindLocals(): void;
    init(): Promise<void>;
    call(name: any, args: any, callback: any): any;
    model(name: any, schema: any): any;
    resolvePlugin(name: any, basedir: any): any;
    loadPlugin(path: string, callback: (...args: any[]) => any): Promise<any>;
    _showDrafts(): any;
    load(callback: any): Promise<any>;
    watch(callback: any): Promise<any>;
    unwatch(): void;
    _generateLocals(): {
        new (path: any, locals: any): {
            page: {
                path: string;
            };
            path: string;
            url: string;
            config: object;
            theme: object;
            layout: string;
            env: any;
            view_dir: string;
            site: object;
            cache?: boolean;
        };
    };
    _runGenerators(): Promise<any[]>;
    _routerReflesh(runningGenerators: any, useCache: any): any;
    _generate(options?: {
        cache?: boolean;
    }): any;
    exit(err: any): any;
    execFilter(type: any, data: any, options: any): any;
    execFilterSync(type: any, data: any, options: any): any;
}
export = Hexo;