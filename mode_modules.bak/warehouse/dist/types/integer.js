"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const number_1 = __importDefault(require("./number"));
const validation_1 = __importDefault(require("../error/validation"));
/**
 * Integer schema type.
 */
class SchemaTypeInteger extends number_1.default {
    /**
     * Casts a integer.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number}
     */
    cast(value_, data) {
        const value = super.cast(value_, data);
        return parseInt(value, 10);
    }
    /**
     * Validates an integer.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Number|Error}
     */
    validate(value_, data) {
        const value = super.validate(value_, data);
        if (value % 1 !== 0) {
            throw new validation_1.default(`\`${value}\` is not an integer!`);
        }
        return value;
    }
}
exports.default = SchemaTypeInteger;
//# sourceMappingURL=integer.js.map