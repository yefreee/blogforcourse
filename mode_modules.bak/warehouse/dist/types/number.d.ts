import SchemaType from '../schematype';
/**
 * Number schema type.
 */
declare class SchemaTypeNumber extends SchemaType<number> {
    /**
     * Casts a number.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number}
     */
    cast(value_?: any, data?: any): number | null | undefined;
    /**
     * Validates a number.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number|Error}
     */
    validate(value_?: any, data?: any): number;
    /**
     * Adds value to a number.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$inc(value: any, update: any): any;
    /**
     * Subtracts value from a number.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$dec(value: any, update: any): number;
    /**
     * Multiplies value to a number.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$mul(value: any, update: any): number;
    /**
     * Divides a number by a value.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$div(value: any, update: any): number;
    /**
     * Divides a number by a value and returns the remainder.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$mod(value: any, update: any): number;
    /**
     * Updates a number if the value is greater than the current value.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$max(value: any, update: any): any;
    /**
     * Updates a number if the value is less than the current value.
     *
     * @param {Number} value
     * @param {Number} update
     * @return {Number}
     */
    u$min(value: any, update: any): any;
}
export default SchemaTypeNumber;