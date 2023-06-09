import moment from 'moment-timezone';
declare function toISOString(date: any): string;
declare function dateHelper(date: any, format: any): any;
declare function timeHelper(date: any, format: any): any;
declare function fullDateHelper(date: any, format: any): any;
declare function relativeDateHelper(date: any): any;
declare function timeTagHelper(date: any, format: any): string;
/**
 * Convert Hexo language code to Moment locale code.
 * examples:
 *   default => en
 *   zh-CN => zh-cn
 *
 * Moment defined locales: https://github.com/moment/moment/tree/master/locale
 */
declare function _toMomentLocale(lang: any): any;
export { dateHelper as date };
export { toISOString as date_xml };
export { timeHelper as time };
export { fullDateHelper as full_date };
export { relativeDateHelper as relative_date };
export { timeTagHelper as time_tag };
export { moment };
export declare const toMomentLocale: import("moize").Moized<typeof _toMomentLocale, Partial<{
    isDeepEqual: boolean;
    isPromise: boolean;
    isReact: boolean;
    isSerialized: boolean;
    isShallowEqual: boolean;
    matchesArg: import("moize").IsEqual;
    matchesKey: import("moize").IsMatchingKey;
    maxAge: number;
    maxArgs: number;
    maxSize: number;
    onCacheAdd: import("moize").OnCacheOperation;
    onCacheChange: import("moize").OnCacheOperation;
    onCacheHit: import("moize").OnCacheOperation;
    onExpire: import("moize").OnExpire;
    profileName: string;
    serializer: import("moize").Serialize;
    transformArgs: import("moize").TransformKey;
    updateCacheForKey: import("moize").UpdateCacheForKey;
    updateExpire: boolean;
}> & {
    isShallowEqual: true;
}>;