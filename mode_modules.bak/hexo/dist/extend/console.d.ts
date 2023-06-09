/**
 * Console plugin option
 * @typedef {Object} Option
 * @property {String} usage - The usage of a console command
 * @property {{name: String, desc: String}[]} arguments - The description of each argument of a console command
 * @property {{name: String, desc: String}[]} options - The description of each option of a console command
 */
declare class Console {
    store: any;
    alias: any;
    constructor();
    /**
     * Get a console plugin function by name
     * @param {String} name - The name of the console plugin
     * @returns {Function} - The console plugin function
     */
    get(name: any): any;
    list(): any;
    /**
     * Register a console plugin
     * @param {String} name - The name of console plugin to be registered
     * @param {String} desc - More detailed information about a console command
     * @param {Option} options - The description of each option of a console command
     * @param {Function} fn - The console plugin to be registered
     */
    register(name: any, desc: any, options: any, fn: any): void;
}
export = Console;