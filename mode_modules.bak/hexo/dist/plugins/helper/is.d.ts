declare function isCurrentHelper(path: string, strict: any): any;
declare function isHomeHelper(): boolean;
declare function isHomeFirstPageHelper(): boolean;
declare function isPostHelper(): boolean;
declare function isPageHelper(): boolean;
declare function isArchiveHelper(): boolean;
declare function isYearHelper(year: any): boolean;
declare function isMonthHelper(year: any, month: any): boolean;
declare function isCategoryHelper(category: any): boolean;
declare function isTagHelper(tag: any): boolean;
export { isCurrentHelper as current };
export { isHomeHelper as home };
export { isHomeFirstPageHelper as home_first_page };
export { isPostHelper as post };
export { isPageHelper as page };
export { isArchiveHelper as archive };
export { isYearHelper as year };
export { isMonthHelper as month };
export { isCategoryHelper as category };
export { isTagHelper as tag };