"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schematype_1 = __importDefault(require("../schematype"));
const validation_1 = __importDefault(require("../error/validation"));
/**
 * Boolean schema type.
 */
class SchemaTypeBoolean extends schematype_1.default {
    /**
     * Casts a boolean.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Boolean}
     */
    cast(value_, data) {
        const value = super.cast(value_, data);
        if (value === 'false' || value === '0')
            return false;
        return Boolean(value);
    }
    /**
     * Validates a boolean.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Boolean|Error}
     */
    validate(value_, data) {
        const value = super.validate(value_, data);
        if (value != null && typeof value !== 'boolean') {
            throw new validation_1.default(`\`${value}\` is not a boolean!`);
        }
        return value;
    }
    /**
     * Parses data and transform them into boolean values.
     *
     * @param {*} value
     * @return {Boolean}
     */
    parse(value) {
        return Boolean(value);
    }
    /**
     * Transforms data into number to compress the size of database files.
     *
     * @param {Boolean} value
     * @return {Number}
     */
    value(value) {
        return +value;
    }
}
exports.default = SchemaTypeBoolean;
//# sourceMappingURL=boolean.js.map