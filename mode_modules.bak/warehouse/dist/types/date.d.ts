import SchemaType from '../schematype';
/**
 * Date schema type.
 */
declare class SchemaTypeDate extends SchemaType<Date> {
    /**
     * Casts data.
     *
     * @param {*} value
     * @return {Date | null | undefined}
     */
    cast(value_?: any): Date | null | undefined;
    cast(value_: Date): Date;
    cast(value_: null): Date | null;
    cast(value_: undefined): Date | undefined;
    /**
     * Validates data.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Date|Error}
     */
    validate(value_: any, data?: any): unknown;
    /**
     * Checks the equality of data.
     *
     * @param {Date} value
     * @param {Date} query
     * @return {Boolean}
     */
    match(value: Date, query: Date): boolean;
    /**
     * Compares between two dates.
     *
     * @param {Date} a
     * @param {Date} b
     * @return {Number}
     */
    compare(a?: any, b?: any): number;
    /**
     * Parses data and transforms it into a date object.
     *
     * @param {*} value
     * @return {Date}
     */
    parse(value?: any): Date;
    /**
     * Transforms a date object to a string.
     *
     * @param {Date} value
     * @return {String}
     */
    value(value?: any): any;
    /**
     * Finds data by its date.
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$day(value: any, query: any): boolean;
    /**
     * Finds data by its month. (Start from 0)
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$month(value: any, query: any): boolean;
    /**
     * Finds data by its year. (4-digit)
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$year(value: any, query: any): boolean;
    /**
     * Adds milliseconds to date.
     *
     * @param {Date} value
     * @param {Number} update
     * @return {Date}
     */
    u$inc(value: any, update: any): Date;
    /**
     * Subtracts milliseconds from date.
     *
     * @param {Date} value
     * @param {Number} update
     * @return {Date}
     */
    u$dec(value: any, update: any): Date;
}
export default SchemaTypeDate;