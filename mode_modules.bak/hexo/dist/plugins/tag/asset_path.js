"use strict";
const hexo_util_1 = require("hexo-util");
module.exports = ctx => {
    const PostAsset = ctx.model('PostAsset');
    return function assetPathTag(args) {
        const slug = args.shift();
        if (!slug)
            return;
        const asset = PostAsset.findOne({ post: this._id, slug });
        if (!asset)
            return;
        const path = (0, hexo_util_1.encodeURL)(new URL(asset.path, ctx.config.url).pathname);
        return path;
    };
};
//# sourceMappingURL=asset_path.js.map