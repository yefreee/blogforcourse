import SchemaType from '../schematype';
/**
 * String schema type.
 */
declare class SchemaTypeString extends SchemaType<string> {
    /**
     * Casts a string.
     *
     * @param {*} value
     * @param {Object} data
     * @return {String}
     */
    cast(value_?: any, data?: any): unknown;
    /**
     * Validates a string.
     *
     * @param {*} value
     * @param {Object} data
     * @return {String|Error}
     */
    validate(value_?: any, data?: any): string;
    /**
     * Checks the equality of data.
     *
     * @param {*} value
     * @param {String|RegExp} query
     * @param {Object} data
     * @return {Boolean}
     */
    match(value: any, query: any, data?: any): any;
    /**
     * Checks whether a string is equal to one of elements in `query`.
     *
     * @param {String} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$in(value: any, query: any, data?: any): boolean;
    /**
     * Checks whether a string is not equal to any elements in `query`.
     *
     * @param {String} value
     * @param {Array} query
     * @param {Object} data
     * @return {Boolean}
     */
    q$nin(value: any, query: any, data?: any): boolean;
    /**
     * Checks length of a string.
     *
     * @param {String} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$length(value: any, query: any): boolean;
}
export default SchemaTypeString;