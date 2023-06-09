"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const hexo_util_1 = require("hexo-util");
const moize_1 = __importDefault(require("moize"));
function cssHelper(...args) {
    let result = '\n';
    args.flat(Infinity).forEach(item => {
        if (typeof item === 'string' || item instanceof String) {
            let path = item;
            if (!path.endsWith('.css')) {
                path += '.css';
            }
            result += `<link rel="stylesheet" href="${hexo_util_1.url_for.call(this, path)}">\n`;
        }
        else {
            // Custom attributes
            item.href = hexo_util_1.url_for.call(this, item.href);
            if (!item.href.endsWith('.css'))
                item.href += '.css';
            result += (0, hexo_util_1.htmlTag)('link', Object.assign({ rel: 'stylesheet' }, item)) + '\n';
        }
    });
    return result;
}
module.exports = (0, moize_1.default)(cssHelper, {
    maxSize: 10,
    isDeepEqual: true
});
//# sourceMappingURL=css.js.map