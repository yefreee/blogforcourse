import SchemaTypeNumber from './number';
/**
 * Integer schema type.
 */
declare class SchemaTypeInteger extends SchemaTypeNumber {
    /**
     * Casts a integer.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number}
     */
    cast(value_?: any, data?: any): number;
    /**
     * Validates an integer.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number|Error}
     */
    validate(value_?: any, data?: any): number;
}
export default SchemaTypeInteger;