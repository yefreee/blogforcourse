/**
* Blockquote tag
*
* Syntax:
*   {% blockquote [author[, source]] [link] [source_link_title] %}
*   Quote string
*   {% endblockquote %}
*/
declare const _default: (ctx: any) => (args: any, content: any) => string;
export = _default;