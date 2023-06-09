/// <reference types="node" />
import { EventEmitter } from 'events';
import Promise from 'bluebird';
import Mutex from './mutex';
declare class Model extends EventEmitter {
    name: string;
    _mutex: Mutex;
    data: Record<any, any>;
    schema: any;
    length: number;
    Document: any;
    Query: any;
    _database: any;
    /**
     * Model constructor.
     *
     * @param {string} name Model name
     * @param {Schema|object} [schema] Schema
     */
    constructor(name: string, schema_: any);
    /**
     * Creates a new document.
     *
     * @param {object} data
     * @return {Document}
     */
    new(data: any): any;
    /**
     * Finds a document by its identifier.
     *
     * @param {*} id
     * @param {object} options
     *   @param {boolean} [options.lean=false] Returns a plain JavaScript object
     * @return {Document|object}
     */
    findById(id: any, options_?: any): any;
    /**
     * Checks if the model contains a document with the specified id.
     *
     * @param {*} id
     * @return {boolean}
     */
    has(id: any): boolean;
    /**
     * Acquires write lock.
     *
     * @return {Promise}
     * @private
     */
    _acquireWriteLock(): Promise.Disposer<void>;
    /**
     * Inserts a document.
     *
     * @param {Document|object} data
     * @return {Promise}
     * @private
     */
    _insertOne(data_: any): Promise<any>;
    /**
     * Inserts a document.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    insertOne(data: any, callback?: any): Promise<any>;
    /**
     * Inserts documents.
     *
     * @param {object|array} data
     * @param {function} [callback]
     * @return {Promise}
     */
    insert(data: any, callback: any): Promise<any>;
    /**
     * Inserts the document if it does not exist; otherwise updates it.
     *
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    save(data: any, callback: any): Promise<any>;
    /**
     * Updates a document with a compiled stack.
     *
     * @param {*} id
     * @param {array} stack
     * @return {Promise}
     * @private
     */
    _updateWithStack(id: any, stack: any): Promise<any>;
    /**
     * Finds a document by its identifier and update it.
     *
     * @param {*} id
     * @param {object} update
     * @param {function} [callback]
     * @return {Promise}
     */
    updateById(id: any, update: any, callback?: any): Promise<any>;
    /**
     * Updates matching documents.
     *
     * @param {object} query
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    update(query: any, data: any, callback?: any): any;
    /**
     * Finds a document by its identifier and replace it.
     *
     * @param {*} id
     * @param  {object} data
     * @return {Promise}
     * @private
     */
    _replaceById(id: any, data_: any): Promise<any>;
    /**
     * Finds a document by its identifier and replace it.
     *
     * @param {*} id
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    replaceById(id: any, data: any, callback?: any): Promise<any>;
    /**
     * Replaces matching documents.
     *
     * @param {object} query
     * @param {object} data
     * @param {function} [callback]
     * @return {Promise}
     */
    replace(query: any, data: any, callback?: any): any;
    /**
     * Finds a document by its identifier and remove it.
     *
     * @param {*} id
     * @param {function} [callback]
     * @return {Promise}
     * @private
     */
    _removeById(id: any): Promise<any>;
    /**
     * Finds a document by its identifier and remove it.
     *
     * @param {*} id
     * @param {function} [callback]
     * @return {Promise}
     */
    removeById(id: any, callback: any): Promise<any>;
    /**
     * Removes matching documents.
     *
     * @param {object} query
     * @param {object} [callback]
     * @return {Promise}
     */
    remove(query: any, callback: any): any;
    /**
     * Deletes a model.
     */
    destroy(): void;
    /**
     * Returns the number of elements.
     *
     * @return {number}
     */
    count(): number;
    /**
     * Iterates over all documents.
     *
     * @param {function} iterator
     * @param {object} [options] See {@link Model#findById}.
     */
    forEach(iterator: any, options?: any): void;
    /**
     * Returns an array containing all documents.
     *
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Array}
     */
    toArray(options?: any): any[];
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
    }): any;
    /**
     * Finds the first matching documents.
     *
     * @param {Object} query
     * @param {Object} [options]
     *   @param {Number} [options.skip=0] Skips the first elements.
     *   @param {Boolean} [options.lean=false] Returns a plain JavaScript object.
     * @return {Document|Object}
     */
    findOne(query: any, options_?: {
        skip?: number;
        lean?: boolean;
    }): any;
    /**
     * Sorts documents. See {@link Query#sort}.
     *
     * @param {String|Object} orderby
     * @param {String|Number} [order]
     * @return {Query}
     */
    sort(orderby: any, order: any): any;
    /**
     * Returns the document at the specified index. `num` can be a positive or
     * negative number.
     *
     * @param {Number} i
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Document|Object}
     */
    eq(i_: any, options?: any): any;
    /**
     * Returns the first document.
     *
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Document|Object}
     */
    first(options: any): any;
    /**
     * Returns the last document.
     *
     * @param {Object} [options] See {@link Model#findById}.
     * @return {Document|Object}
     */
    last(options: any): any;
    /**
     * Returns the specified range of documents.
     *
     * @param {Number} start
     * @param {Number} [end]
     * @return {Query}
     */
    slice(start_: number, end_?: number): any;
    /**
     * Limits the number of documents returned.
     *
     * @param {Number} i
     * @return {Query}
     */
    limit(i: any): any;
    /**
     * Specifies the number of items to skip.
     *
     * @param {Number} i
     * @return {Query}
     */
    skip(i: any): any;
    /**
     * Returns documents in a reversed order.
     *
     * @return {Query}
     */
    reverse(): any;
    /**
     * Returns documents in random order.
     *
     * @return {Query}
     */
    shuffle(): any;
    /**
     * Creates an array of values by iterating each element in the collection.
     *
     * @param {Function} iterator
     * @param {Object} [options]
     * @return {Array}
     */
    map(iterator: any, options: any): any[];
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the first document.
     * @return {*}
     */
    reduce(iterator: any, initial: any): any;
    /**
     * Reduces a collection to a value which is the accumulated result of iterating
     * each element in the collection from right to left.
     *
     * @param {Function} iterator
     * @param {*} [initial] By default, the initial value is the last document.
     * @return {*}
     */
    reduceRight(iterator: any, initial: any): any;
    /**
     * Creates a new array with all documents that pass the test implemented by the
     * provided function.
     *
     * @param {Function} iterator
     * @param {Object} [options]
     * @return {Query}
     */
    filter(iterator: any, options: any): any;
    /**
     * Tests whether all documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    every(iterator: any): boolean;
    /**
     * Tests whether some documents pass the test implemented by the provided
     * function.
     *
     * @param {Function} iterator
     * @return {Boolean}
     */
    some(iterator: any): boolean;
    /**
     * Returns a getter function for normal population.
     *
     * @param {Object} data
     * @param {Model} model
     * @param {Object} options
     * @return {Function}
     * @private
     */
    _populateGetter(data: any, model: any, options: any): () => any;
    /**
     * Returns a getter function for array population.
     *
     * @param {Object} data
     * @param {Model} model
     * @param {Object} options
     * @return {Function}
     * @private
     */
    _populateGetterArray(data: any, model: any, options: any): () => any;
    /**
     * Populates document references with a compiled stack.
     *
     * @param {Object} data
     * @param {Array} stack
     * @return {Object}
     * @private
     */
    _populate(data: any, stack: any): any;
    /**
     * Populates document references.
     *
     * @param {String|Object} path
     * @return {Query}
     */
    populate(path: any): any;
    /**
     * Imports data.
     *
     * @param {Array} arr
     * @private
     */
    _import(arr: any): void;
    /**
     * Exports data.
     *
     * @return {String}
     * @private
     */
    _export(): string;
    toJSON(): any[];
    get: Model['findById'];
    size: Model['count'];
    each: Model['forEach'];
    random: Model['shuffle'];
}
export default Model;