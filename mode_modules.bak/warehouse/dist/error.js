"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WarehouseError extends Error {
    /**
     * WarehouseError constructor
     *
     * @param {string} msg
     * @param {string} code
     */
    constructor(msg, code) {
        super(msg);
        Error.captureStackTrace(this);
        this.code = code;
    }
}
WarehouseError.ID_EXIST = 'ID_EXIST';
WarehouseError.ID_NOT_EXIST = 'ID_NOT_EXIST';
WarehouseError.ID_UNDEFINED = 'ID_UNDEFINED';
WarehouseError.prototype.name = 'WarehouseError';
exports.default = WarehouseError;
//# sourceMappingURL=error.js.map