"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schematype_1 = __importDefault(require("../schematype"));
const validation_1 = __importDefault(require("../error/validation"));
/**
 * Date schema type.
 */
class SchemaTypeDate extends schematype_1.default {
    cast(value_) {
        const value = super.cast(value_, null);
        if (value == null || value instanceof Date)
            return value;
        return new Date(value);
    }
    /**
     * Validates data.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Date|Error}
     */
    validate(value_, data) {
        const value = super.validate(value_, data);
        if (value != null && (!(value instanceof Date) || isNaN(value.getTime()))) {
            throw new validation_1.default(`\`${value}\` is not a valid date!`);
        }
        return value;
    }
    /**
     * Checks the equality of data.
     *
     * @param {Date} value
     * @param {Date} query
     * @return {Boolean}
     */
    match(value, query) {
        if (!value || !query) {
            return value === query;
        }
        return value.getTime() === query.getTime();
    }
    /**
     * Compares between two dates.
     *
     * @param {Date} a
     * @param {Date} b
     * @return {Number}
     */
    compare(a, b) {
        if (a) {
            return b ? a - b : 1;
        }
        return b ? -1 : 0;
    }
    /**
     * Parses data and transforms it into a date object.
     *
     * @param {*} value
     * @return {Date}
     */
    parse(value) {
        if (value)
            return new Date(value);
    }
    /**
     * Transforms a date object to a string.
     *
     * @param {Date} value
     * @return {String}
     */
    value(value) {
        return value ? value.toISOString() : value;
    }
    /**
     * Finds data by its date.
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$day(value, query) {
        return value ? value.getDate() === query : false;
    }
    /**
     * Finds data by its month. (Start from 0)
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$month(value, query) {
        return value ? value.getMonth() === query : false;
    }
    /**
     * Finds data by its year. (4-digit)
     *
     * @param {Date} value
     * @param {Number} query
     * @return {Boolean}
     */
    q$year(value, query) {
        return value ? value.getFullYear() === query : false;
    }
    /**
     * Adds milliseconds to date.
     *
     * @param {Date} value
     * @param {Number} update
     * @return {Date}
     */
    u$inc(value, update) {
        if (value)
            return new Date(value.getTime() + update);
    }
    /**
     * Subtracts milliseconds from date.
     *
     * @param {Date} value
     * @param {Number} update
     * @return {Date}
     */
    u$dec(value, update) {
        if (value)
            return new Date(value.getTime() - update);
    }
}
exports.default = SchemaTypeDate;
//# sourceMappingURL=date.js.map