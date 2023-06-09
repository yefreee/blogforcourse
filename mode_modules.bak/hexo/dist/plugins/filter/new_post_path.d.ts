import Promise from 'bluebird';
interface Data {
    path?: string;
    layout?: string;
    slug?: string;
    date?: Date;
}
declare function newPostPathFilter(data: Data, replace: any): Promise<string>;
export = newPostPathFilter;