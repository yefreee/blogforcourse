interface Options {
    min_depth?: number;
    max_depth?: number;
    class?: string;
    class_item?: string;
    class_link?: string;
    class_text?: string;
    class_child?: string;
    class_number?: string;
    class_level?: string;
    list_number?: boolean;
}
declare function tocHelper(str: any, options?: Options): string;
export = tocHelper;