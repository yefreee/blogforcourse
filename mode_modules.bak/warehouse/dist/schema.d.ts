import SchemaType from './schematype';
import * as Types from './types/index';
import SchemaTypeVirtual from './types/virtual';
declare class Schema {
    paths: Record<string, SchemaType<any>>;
    statics: Record<string, any>;
    methods: Record<string, any>;
    hooks: any;
    stacks: any;
    /**
     * Schema constructor.
     *
     * @param {Object} [schema]
     */
    constructor(schema?: any);
    /**
     * Adds paths.
     *
     * @param {Object} schema
     * @param {String} prefix
     */
    add(schema: Record<string, any>, prefix?: string): void;
    /**
     * Gets/Sets a path.
     *
     * @param {String} name
     * @param {*} obj
     * @return {SchemaType | undefined}
     */
    path(name: string): SchemaType<any>;
    path(name: string, obj: SchemaType<unknown> | ((...args: any[]) => any) | {
        type: any;
    } | Record<string, unknown> | any[]): void;
    /**
     * Updates cache stacks.
     *
     * @param {String} name
     * @param {SchemaType} type
     * @private
     */
    _updateStack(name: string, type: SchemaType<unknown>): void;
    /**
     * Adds a virtual path.
     *
     * @param {String} name
     * @param {Function} [getter]
     * @return {SchemaType.Virtual}
     */
    virtual(name: string, getter?: () => any): SchemaTypeVirtual;
    /**
     * Adds a pre-hook.
     *
     * @param {String} type Hook type. One of `save` or `remove`.
     * @param {Function} fn
     */
    pre(type: any, fn: any): void;
    /**
     * Adds a post-hook.
     *
     * @param {String} type Hook type. One of `save` or `remove`.
     * @param {Function} fn
     */
    post(type: any, fn: any): void;
    /**
     * Adds a instance method.
     *
     * @param {String} name
     * @param {Function} fn
     */
    method(name: any, fn: any): void;
    /**
     * Adds a static method.
     *
     * @param {String} name
     * @param {Function} fn
     */
    static(name: string, fn: any): void;
    /**
     * Apply getters.
     *
     * @param {Object} data
     * @return {void}
     * @private
     */
    _applyGetters(data: any): void;
    /**
     * Apply setters.
     *
     * @param {Object} data
     * @return {void}
     * @private
     */
    _applySetters(data: any): void;
    /**
     * Parses database.
     *
     * @param {Object} data
     * @return {Object}
     * @private
     */
    _parseDatabase(data: any): any;
    /**
     * Exports database.
     *
     * @param {Object} data
     * @return {Object}
     * @private
     */
    _exportDatabase(data: any): any;
    /**
     * Parses updating expressions and returns a stack.
     *
     * @param {Object} updates
     * @return {queryCallback[]}
     * @private
     */
    _parseUpdate(updates: any): any[];
    /**
     * Returns a function for querying.
     *
     * @param {Object} query
     * @return {queryFilterCallback}
     * @private
     */
    _execQuery(query: any): (data: any) => boolean;
    /**
     * Parses sorting expressions and returns a stack.
     *
     * @param {Object} sorts
     * @param {string} [prefix]
     * @param {queryParseCallback[]} [stack]
     * @return {queryParseCallback[]}
     * @private
     */
    _parseSort(sorts: any, prefix?: string, stack?: any[]): any[];
    /**
     * Returns a function for sorting.
     *
     * @param {Object} sorts
     * @return {queryParseCallback}
     * @private
     */
    _execSort(sorts: any): (a: any, b: any) => any;
    /**
     * Parses population expression and returns a stack.
     *
     * @param {String|Object} expr
     * @return {PopulateResult[]}
     * @private
     */
    _parsePopulate(expr: any): any[];
    Types: typeof Types;
    static Types: typeof Types;
}
export default Schema;