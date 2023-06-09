import SchemaType from '../schematype';
/**
 * Array schema type.
 */
declare class SchemaTypeArray<I, T extends SchemaType<I>> extends SchemaType<I[]> {
    options: SchemaType<I[]>['options'] & {
        child?: T;
    };
    child: T;
    /**
     *
     * @param {String} name
     * @param {Object} [options]
     *   @param {Boolean} [options.required=false]
     *   @param {Array|Function} [options.default=[]]
     *   @param {SchemaType} [options.child]
     */
    constructor(name: string, options?: Partial<SchemaType<I[]>['options']> & {
        child?: T;
    });
    /**
     * Casts an array and its child elements.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Array}
     */
    cast(value_?: unknown, data?: unknown): I[] | null | undefined;
    /**
     * Validates an array and its child elements.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Array|Error}
     */
    validate(value_?: unknown, data?: unknown): I[];
    /**
     * Compares an array by its child elements and the size of the array.
     *
     * @param {Array} a
     * @param {Array} b
     * @return {Number}
     */
    compare(a?: I[], b?: I[]): number;
    /**
     * Parses data.
     *
     * @param {Array} value
     * @return {Array}
     */
    parse(value?: unknown[]): any[];
    /**
     * Transforms data.
     *
     * @param {Array} value
     * @param {Object} data
     * @return {Array}
     */
    value(value?: unknown[], data?: unknown): any[];
    /**
     * Checks the equality of an array.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    match(value?: I[], query?: unknown[], data?: unknown): boolean;
    /**
     * Checks whether the number of elements in an array is equal to `query`.
     *
     * @param {Array} value
     * @param {Number} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$size(value?: unknown[], query?: unknown, data?: unknown): boolean;
    /**
     * Checks whether an array contains one of elements in `query`.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$in(value?: unknown[], query?: unknown[], data?: unknown): boolean;
    /**
     * Checks whether an array does not contain in any elements in `query`.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$nin(value?: unknown[], query?: unknown[], data?: unknown): boolean;
    /**
     * Checks whether an array contains all elements in `query`.
     *
     * @param {Array} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$all(value?: unknown[], query?: unknown[], data?: unknown): boolean;
    /**
     * Add elements to an array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$push<T>(value?: T[], update?: T | T[], data?: unknown): T[];
    /**
     * Add elements in front of an array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$unshift(value?: unknown[], update?: unknown, data?: unknown): any[];
    /**
     * Removes elements from an array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$pull(value?: unknown[], update?: unknown, data?: unknown): any[];
    /**
     * Removes the first element from an array.
     *
     * @param {Array} value
     * @param {Number|Boolean} update
     * @param {Object} data
     * @return {Array}
     */
    u$shift(value?: any, update?: any, data?: any): any;
    /**
     * Removes the last element from an array.
     *
     * @param {Array} value
     * @param {Number|Boolean} update
     * @param {Object} data
     * @return {Array}
     */
    u$pop(value?: any, update?: any, data?: any): any;
    /**
     * Add elements to an array only if the value is not already in the array.
     *
     * @param {Array} value
     * @param {*} update
     * @param {Object} data
     * @return {Array}
     */
    u$addToSet(value?: any[], update?: any, data?: any): any[];
    q$length: SchemaTypeArray<I, T>['q$size'];
    u$append: SchemaTypeArray<I, T>['u$push'];
    u$prepend: SchemaTypeArray<I, T>['u$unshift'];
}
export default SchemaTypeArray;