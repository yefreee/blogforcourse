/// <reference path="router.d.ts" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from 'events';
declare const Readable: typeof import("stream").Readable;
interface Data {
    data: any;
    modified: boolean;
}
declare module 'stream' {
    export default class _Stream extends Stream {
        readable: boolean;
    }
}
declare class RouteStream extends Readable {
    _data: any;
    _ended: boolean;
    modified: any;
    push: any;
    emit: any;
    constructor(data: Data);
    _toBuffer(data: any): Buffer;
    _read(): boolean;
}
declare class Router extends EventEmitter {
    routes: {
        [key: string]: Data | null;
    };
    emit: any;
    constructor();
    list(): string[];
    format(path: string): string;
    get(path: string): RouteStream;
    isModified(path: any): boolean;
    set(path: any, data: any): this;
    remove(path: any): this;
}
export = Router;