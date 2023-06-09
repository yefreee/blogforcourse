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
class SchemaTypeBuffer extends schematype_1.default {
    /**
     * @param {string} name
     * @param {object} [options]
     *   @param {boolean} [options.required=false]
     *   @param {boolean|Function} [options.default]
     *   @param {string} [options.encoding=hex]
     */
    constructor(name, options) {
        super(name, Object.assign({
            encoding: 'hex'
        }, options));
    }
    /**
     * Casts data.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Buffer}
     */
    cast(value_, data) {
        const value = super.cast(value_, data);
        if (value == null || Buffer.isBuffer(value))
            return value;
        if (typeof value === 'string')
            return Buffer.from(value, this.options.encoding);
        if (Array.isArray(value))
            return Buffer.from(value);
    }
    /**
     * Validates data.
     *
     * @param {*} value
     * @param {Object} data
     * @return {Buffer}
     */
    validate(value_, data) {
        const value = super.validate(value_, data);
        if (!Buffer.isBuffer(value)) {
            throw new validation_1.default(`\`${value}\` is not a valid buffer!`);
        }
        return value;
    }
    /**
     * Compares between two buffers.
     *
     * @param {Buffer} a
     * @param {Buffer} b
     * @return {Number}
     */
    compare(a, b) {
        if (Buffer.isBuffer(a)) {
            return Buffer.isBuffer(b) ? a.compare(b) : 1;
        }
        return Buffer.isBuffer(b) ? -1 : 0;
    }
    /**
     * Parses data and transform them into buffer values.
     *
     * @param {*} value
     * @return {Boolean}
     */
    parse(value) {
        return value ? Buffer.from(value, this.options.encoding) : value;
    }
    /**
     * Transforms data into number to compress the size of database files.
     *
     * @param {Buffer} value
     * @return {Number}
     */
    value(value) {
        return Buffer.isBuffer(value) ? value.toString(this.options.encoding) : value;
    }
    /**
     * Checks the equality of data.
     *
     * @param {Buffer} value
     * @param {Buffer} query
     * @return {Boolean}
     */
    match(value, query) {
        if (Buffer.isBuffer(value) && Buffer.isBuffer(query)) {
            return value.equals(query);
        }
        return value === query;
    }
}
exports.default = SchemaTypeBuffer;
//# sourceMappingURL=buffer.js.map