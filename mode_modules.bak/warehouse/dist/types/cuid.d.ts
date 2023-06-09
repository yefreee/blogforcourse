import SchemaType from '../schematype';
/**
 * [CUID](https://github.com/ericelliott/cuid) schema type.
 */
declare class SchemaTypeCUID extends SchemaType<string> {
    /**
     * Casts data. Returns a new CUID only if value is null and the field is
     * required.
     *
     * @param {String} value
     * @return {String}
     */
    cast(value?: any): any;
    /**
     * Validates data. A valid CUID must be started with `c` and 25 in length.
     *
     * @param {*} value
     * @return {String|Error}
     */
    validate(value?: any): any;
}
export default SchemaTypeCUID;