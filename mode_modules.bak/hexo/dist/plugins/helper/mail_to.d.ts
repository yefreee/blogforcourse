interface Options {
    href?: string;
    title?: string;
    class?: string | string[];
}
declare function mailToHelper(path: any, text: any, options?: Options): string;
declare const _default: import("moize").Moized<typeof mailToHelper, Partial<{
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
    maxSize: number;
    isDeepEqual: true;
}>;
export = _default;