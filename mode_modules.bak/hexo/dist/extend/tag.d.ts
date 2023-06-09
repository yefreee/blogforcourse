import Promise from 'bluebird';
declare class Tag {
    env: any;
    source: any;
    constructor();
    register(name: any, fn: any, options: any): void;
    unregister(name: any): void;
    render(str: any, options: {
        source?: string;
    }, callback: any): Promise<unknown>;
}
export = Tag;