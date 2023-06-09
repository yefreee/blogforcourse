"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schematype_1 = __importDefault(require("../schematype"));
const validation_1 = __importDefault(require("../error/validation"));
/**
 * Enum schema type.
 */
class SchemaTypeEnum extends schematype_1.default {
    /**
     *
     * @param {String} name
     * @param {Object} options
     *   @param {Boolean} [options.required=false]
     *   @param {Array} options.elements
     *   @param {*} [options.default]
     */
    constructor(name, options) {
        super(name, Object.assign({
            elements: []
        }, options));
    }
    /**
     * Validates data. The value must be one of elements set in the options.
     *
     * @param {*} value
     * @param {Object} data
     * @return {*}
     */
    validate(value_, data) {
        const value = super.validate(value_, data);
        const elements = this.options.elements;
        if (!elements.includes(value)) {
            throw new validation_1.default(`The value must be one of ${elements.join(', ')}`);
        }
        return value;
    }
}
exports.default = SchemaTypeEnum;
//# sourceMappingURL=enum.js.map