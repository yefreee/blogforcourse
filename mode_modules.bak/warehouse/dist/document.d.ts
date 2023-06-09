declare abstract class Document {
    abstract _model: any;
    _id: any;
    abstract _schema: any;
    /**
     * Document constructor.
     *
     * @param {object} data
     */
    constructor(data: any);
    /**
     * Saves the document.
     *
     * @param {function} [callback]
     * @return {Promise}
     */
    save(callback: any): any;
    /**
     * Updates the document.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    update(data: any, callback: any): any;
    /**
     * Replaces the document.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    replace(data: any, callback: any): any;
    /**
     * Removes the document.
     *
     * @param {function} [callback]
     * @return {Promise}
     */
    remove(callback: any): any;
    /**
     * Returns a plain JavaScript object.
     *
     * @return {object}
     */
    toObject(): {};
    /**
     * Returns a string representing the document.
     *
     * @return {String}
     */
    toString(): string;
    /**
     * Populates document references.
     *
     * @param {String|Object} expr
     * @return {Document}
     */
    populate(expr: any): any;
}
export default Document;