import Promise from 'bluebird';
interface Result {
    path?: string;
    content?: string;
}
interface Data {
    engine?: string;
    content?: string;
    disableNunjucks?: boolean;
    markdown?: object;
    source?: string;
}
declare class Post {
    context: any;
    config: any;
    tag: any;
    separator: any;
    constructor(context: any);
    create(data: any, replace: any, callback?: any): Promise<{
        path: any;
        content: any;
    }>;
    _getScaffold(layout: any): any;
    _renderScaffold(data: any): any;
    publish(data: any, replace: any, callback: any): Promise<Result>;
    render(source: any, data: Data, callback: any): any;
}
export = Post;