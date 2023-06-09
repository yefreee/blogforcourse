"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = require("path");
const tildify_1 = __importDefault(require("tildify"));
const theme_1 = __importDefault(require("../theme"));
const source_1 = __importDefault(require("./source"));
const hexo_fs_1 = require("hexo-fs");
const picocolors_1 = require("picocolors");
const hexo_util_1 = require("hexo-util");
const validate_config_1 = __importDefault(require("./validate_config"));
function findConfigPath(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const { dir, name } = (0, path_1.parse)(path);
        const files = yield (0, hexo_fs_1.readdir)(dir);
        const item = files.find(item => item.startsWith(name));
        if (item != null)
            return (0, path_1.join)(dir, item);
    });
}
module.exports = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ctx.env.init)
        return;
    const baseDir = ctx.base_dir;
    let configPath = ctx.config_path;
    const path = (yield (0, hexo_fs_1.exists)(configPath)) ? configPath : yield findConfigPath(configPath);
    if (!path)
        return;
    configPath = path;
    let config = yield ctx.render.render({ path });
    if (!config || typeof config !== 'object')
        return;
    ctx.log.debug('Config loaded: %s', (0, picocolors_1.magenta)((0, tildify_1.default)(configPath)));
    ctx.config = (0, hexo_util_1.deepMerge)(ctx.config, config);
    // If root is not exist, create it by config.url
    if (!config.root) {
        let { pathname } = new URL(ctx.config.url);
        if (!pathname.endsWith('/'))
            pathname += '/';
        ctx.config.root = pathname;
    }
    config = ctx.config;
    (0, validate_config_1.default)(ctx);
    ctx.config_path = configPath;
    // Trim multiple trailing '/'
    config.root = config.root.replace(/\/*$/, '/');
    // Remove any trailing '/'
    config.url = config.url.replace(/\/+$/, '');
    ctx.public_dir = (0, path_1.resolve)(baseDir, config.public_dir) + path_1.sep;
    ctx.source_dir = (0, path_1.resolve)(baseDir, config.source_dir) + path_1.sep;
    ctx.source = new source_1.default(ctx);
    if (!config.theme)
        return;
    const theme = config.theme.toString();
    config.theme = theme;
    const themeDirFromThemes = (0, path_1.join)(baseDir, 'themes', theme) + path_1.sep; // base_dir/themes/[config.theme]/
    const themeDirFromNodeModules = (0, path_1.join)(ctx.plugin_dir, 'hexo-theme-' + theme) + path_1.sep; // base_dir/node_modules/hexo-theme-[config.theme]/
    // themeDirFromThemes has higher priority than themeDirFromNodeModules
    let ignored = [];
    if (yield (0, hexo_fs_1.exists)(themeDirFromThemes)) {
        ctx.theme_dir = themeDirFromThemes;
        ignored = ['**/themes/*/node_modules/**', '**/themes/*/.git/**'];
    }
    else if (yield (0, hexo_fs_1.exists)(themeDirFromNodeModules)) {
        ctx.theme_dir = themeDirFromNodeModules;
        ignored = ['**/node_modules/hexo-theme-*/node_modules/**', '**/node_modules/hexo-theme-*/.git/**'];
    }
    ctx.theme_script_dir = (0, path_1.join)(ctx.theme_dir, 'scripts') + path_1.sep;
    ctx.theme = new theme_1.default(ctx, { ignored });
});
//# sourceMappingURL=load_config.js.map