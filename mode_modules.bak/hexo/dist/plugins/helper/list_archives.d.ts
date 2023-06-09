interface Options {
    format?: string;
    type?: string;
    style?: string;
    transform?: (name: string) => string;
    separator?: string;
    show_count?: boolean;
    class?: string;
    order?: number;
}
declare function listArchivesHelper(options?: Options): string;
export = listArchivesHelper;