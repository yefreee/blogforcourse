import Promise from 'bluebird';
declare abstract class Query {
    private data;
    length: number;
    abstract _model: any;
    abstract _schema: any;
    /**
     * Query constructor.
     *
     * @param {Array} data
     */
    constructor(data: any[]);
    /**
     * Returns the number of elements.
     *
     * @return Number
     */
    count(): number;
    /**
     * Iterates over all documents.
     *
     * @param {Function} iterator
     */
    forEach(iterator: (item: any, index: number) => void): void;
    /**
     * Returns an array containing all documents.
     *
     * @return {Array}
     */
    toArray(): any[];
    /**
     * Returns the document at the specified index. `num` can be a positive or
     * negative number.
     *
     * @param {Number} i
     * @return {Document|Object}
     */
    eq(i: number): any;
    /**
     * Returns the first document.
     *
     * @return {Document|Object}
     */
    first(): any;
    /**
     * Returns the last document.
     *
     * @return {Document|Object}
     */
    last(): any;
    /**
     * Returns the specified range of documents.
     *
     * @param {Number} start
     * @param {Number} [end]
     * @return {Query}
     */
    slice(start: number, end?: number): Query;
    /**
     * Limits the number of documents returned.
     *
     * @param {Number} i
     * @return {Query}
     */
    limit(i: number): Query;
    /**
     * Specifies the number of items to skip.
     *
     * @param {Number} i
     * @return {Query}
     */
    skip(i: number): Query;
    /**
     * Returns documents in a reversed order.
     *
     * @return {Query}
     */
    reverse(): Query;
    /**
     * Returns documents in random order.
     *
     * @return {Query}
     */
    shuffle(): Query;
    /**
     * Finds matching documents.
     *
     * @param {Object} query
     * @param {Object} [options]
     *   @param {Number} [options.limit=0] Limits the number of documents returned.
     *   @param {Number} [options.skip=0] Skips the first elements.
     *   @param {Boolean} [options.lean=false] Returns a plain JavaScript object.
     * @return {Query|Array}
     */
    find(query: any, options?: {
        limit?: number;
        skip?: number;
        lean?: boolean;
    }): any[] | Query;
    /**
     * Finds the first matching documents.
     *
     * @param {Object} query
     * @param {Object} [options]
     *   @param {Number} [options.skip=0] Skips the first elements.
     *   @param {Boolean} [options.lean=false] Returns a plain JavaScript object.
     * @return {Document|Object}
     */
    findOne(query: any, options?: {
        skip?: number;
        lean?: boolean;
    }): any;
    /**
     * Sorts documents.
     *
     * Example:
     *
     * ``` js
     * query.sort('date', -1);
     * query.sort({date: -1, title: 1});
     * query.sort('-date title');
     * ```
     *
     * If the `order` equals to `-1`, `desc` or `descending`, the data will be
     * returned in reversed order.
     *
     * @param {String|Object} orderby
     * @param {String|Number} [order]
     * @return {Query}
     */
    sort(orderby: any, order: any): Query;
    /**
     * Creates an array of values by iterating each element in the collection.
     *
     * @param {Function} iterator
     * @return {Array}
     */
    map<T>(iterator: (item: any, index: number) => T): T[];
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the first document.
     * @return {*}
     */
    reduce(iterator: any, initial?: any): any;
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection from right to left.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the last document.
     * @return {*}
     */
    reduceRight(iterator: any, initial?: any): any;
    /**
     * Creates a new array with all documents that pass the test implemented by the
     * provided function.
     *
     * @param {Function} iterator
     * @return {Query}
     */
    filter(iterator: (item: any, index: number) => boolean): Query;
    /**
     * Tests whether all documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    every(iterator: (item: any, index: number) => boolean): boolean;
    /**
     * Tests whether some documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    some(iterator: (item: any, index: number) => boolean): boolean;
    /**
     * Update all documents.
     *
     * @param {Object} data
     * @param {Function} [callback]
     * @return {Promise}
     */
    update(data: any, callback?: (err?: any) => void): Promise<any>;
    /**
     * Replace all documents.
     *
     * @param {Object} data
     * @param {Function} [callback]
     * @return {Promise}
     */
    replace(data: any, callback?: (err?: any) => void): Promise<any>;
    /**
     * Remove all documents.
     *
     * @param {Function} [callback]
     * @return {Promise}
     */
    remove(callback: any): Promise<any[]>;
    /**
     * Populates document references.
     *
     * @param {String|Object} expr
     * @return {Query}
     */
    populate(expr: any): Query;
    size: Query['count'];
    each: Query['forEach'];
    random: Query['shuffle'];
}
export default Query;