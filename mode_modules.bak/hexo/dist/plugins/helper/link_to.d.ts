interface Options {
    href?: string;
    title?: string;
    external?: boolean | null;
    class?: string | string[];
    target?: string;
    rel?: string;
}
declare function linkToHelper(path: string, text: string, options?: Options | boolean): string;
export = linkToHelper;