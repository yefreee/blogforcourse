import SchemaType from '../schematype';
/**
 * Virtual schema type.
 */
declare class SchemaTypeVirtual extends SchemaType<any> {
    getter: (() => any) | undefined;
    setter: ((value: any) => void) | undefined;
    /**
     * Add a getter.
     *
     * @param {Function} fn
     * @chainable
     */
    get(fn: any): this;
    /**
     * Add a setter.
     *
     * @param {Function} fn
     * @chainable
     */
    set(fn: any): this;
    /**
     * Applies getters.
     *
     * @param {*} value
     * @param {Object} data
     * @return {*}
     */
    cast(value: any, data: any): void;
    /**
     * Applies setters.
     *
     * @param {*} value
     * @param {Object} data
     */
    validate(value: any, data: any): void;
}
export default SchemaTypeVirtual;