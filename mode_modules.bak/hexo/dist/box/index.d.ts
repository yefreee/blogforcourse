/// <reference types="node" />
/// <reference types="node" />
import BlueBirdPromise from 'bluebird';
import File from './file';
import { Pattern } from 'hexo-util';
import { EventEmitter } from 'events';
interface Processor {
    pattern: Pattern;
    process: (file: File) => void;
}
declare class Box extends EventEmitter {
    options: any;
    context: any;
    base: any;
    processors: Processor[];
    _processingFiles: any;
    watcher: any;
    Cache: any;
    File: any;
    ignore: any;
    source: any;
    emit: any;
    ctx: any;
    constructor(ctx: any, base: any, options?: object);
    _createFileClass(): {
        new ({ source, path, params, type }: {
            source: any;
            path: any;
            params: any;
            type: any;
        }): {
            box: Box;
            render(options: any): any;
            renderSync(options: any): any;
            source: any;
            path: any;
            params: any;
            type: any;
            read(options: any): BlueBirdPromise<string | Buffer>;
            readSync(options: any): string | Buffer;
            stat(options: any): BlueBirdPromise<fs.Stats>;
            statSync(options: any): any;
        };
        TYPE_CREATE: "create";
        TYPE_UPDATE: "update";
        TYPE_SKIP: "skip";
        TYPE_DELETE: "delete";
    };
    addProcessor(pattern: any, fn: any): void;
    _readDir(base: any, prefix?: string): any;
    _checkFileStatus(path: any): any;
    process(callback?: any): BlueBirdPromise<any>;
    _processFile(type: any, path: any): BlueBirdPromise<any>;
    watch(callback: any): BlueBirdPromise<void>;
    unwatch(): void;
    isWatching(): boolean;
}
export = Box;