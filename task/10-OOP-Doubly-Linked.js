class Node {
    constructor() {
        throw new Error('Not implemented'); 
    }

    prev() {
        throw new Error('Not implemented');
    }

    next() {
        throw new Error('Not implemented');
    }

    getData() {
        throw new Error('Not implemented');
    }
}

class LinkedList {
    constructor() {
        throw new Error('Not implemented');
    }
    
    /**
     * Adds new Node with {data} to the end of the list
     * 
     * @param {any} data new Node data
     *
     */
    append(data) {
        throw new Error('Not implemented');
    }
    /**
     * 
     * @returns {Node} the head element of the list
     */
    head() {
        throw new Error('Not implemented');
    }

    /**
     * 
     * @returns {Node} the last element of the list
     */
    tail() {
        throw new Error('Not implemented');
    }

    /**
     * @param {number} index index of the Node
     * 
     * @returns {Node} the Node element at specified index
     */
    at(index) {
        throw new Error('Not implemented');
    }

    /**
     * Inserts new Node at specified index with passed data
     * 
     * @param {number} index index to put new Node at
     * @param {any} data data of new Node
     */
    insertAt(index, data) {
        throw new Error('Not implemented');
    }

    /**
     * Checks if the list is emmty
     * 
     * @returns {boolean} true if the list is empty
     */
    isEmpty() {
        throw new Error('Not implemented');
    }

    /**
     * Clears the list
     * 
     */
    clear() {
        throw new Error('Not implemented');
    }

    /**
     * Deletes the Node at specified index
     * 
     * @param {number} index index of the Node to delete
     */
    deleteAt(index) {
        throw new Error('Not implemented');
    }

    /**
     * Returns the list as array of values of it's Nodes
     * 
     * @return {Array} array of Node's values
     */
    asArray() {
        throw new Error('Not implemented');
    }

    /**
     * Internally reverses the list 
     * 
     */
    reverse() {
        throw new Error('Not implemented');
    }
    

    /**
     * It returns the index of the first node that contains the data passed in as an argument.
     * @param data - The data to search for.
     * @returns The index of the data in the linked list.
     */
    indexOf(data) {
        throw new Error('Not implemented');
    }

    /**
     * It's a function that prints out each element of the List.
     */
    show(){
        throw new Error('Not implemented');
    }
 }
 

module.exports = {
    Node,
    LinkedList
}