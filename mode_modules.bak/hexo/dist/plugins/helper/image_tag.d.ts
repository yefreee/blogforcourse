interface Options {
    src?: string;
    class?: string | string[];
}
declare function imageTagHelper(path: string, options?: Options): string;
export = imageTagHelper;