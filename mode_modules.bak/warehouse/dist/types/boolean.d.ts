import SchemaType from '../schematype';
/**
 * Boolean schema type.
 */
declare class SchemaTypeBoolean extends SchemaType<boolean> {
    /**
     * Casts a boolean.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Boolean}
     */
    cast(value_?: unknown, data?: unknown): boolean;
    /**
     * Validates a boolean.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Boolean|Error}
     */
    validate(value_: unknown, data?: unknown): boolean;
    /**
     * Parses data and transform them into boolean values.
     *
     * @param {*} value
     * @return {Boolean}
     */
    parse(value: unknown): boolean;
    /**
     * Transforms data into number to compress the size of database files.
     *
     * @param {Boolean} value
     * @return {Number}
     */
    value(value: unknown): number;
}
export default SchemaTypeBoolean;