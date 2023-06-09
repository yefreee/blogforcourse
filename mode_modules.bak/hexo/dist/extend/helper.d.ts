declare class Helper {
    store: any;
    constructor();
    /**
     * @returns {Object} - The plugin store
     */
    list(): any;
    /**
     * Get helper plugin function by name
     * @param {String} name - The name of the helper plugin
     * @returns {Function}
     */
    get(name: string): any;
    /**
     * Register a helper plugin
     * @param {String} name - The name of the helper plugin
     * @param {Function} fn - The helper plugin function
     */
    register(name: string, fn: any): void;
}
export = Helper;