interface Options {
    base?: string;
    current?: number;
    format?: string;
    total?: number;
    end_size?: number;
    mid_size?: number;
    space?: string;
    next_text?: string;
    prev_text?: string;
    prev_next?: boolean;
    escape?: boolean;
    page_class?: string;
    current_class?: string;
    space_class?: string;
    prev_class?: string;
    next_class?: string;
    force_prev_next?: boolean;
    show_all?: boolean;
}
declare function paginatorHelper(options?: Options): string;
export = paginatorHelper;