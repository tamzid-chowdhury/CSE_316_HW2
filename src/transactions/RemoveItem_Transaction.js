'use strict'

// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import { jsTPS_Transaction } from "../common/jsTPS.js"

// THIS TRANSACTION IS FOR REMOVING A NEW ITEM TO A TODO LIST
export default class RemoveItem_Transaction extends jsTPS_Transaction {
    constructor(initApp,listItem) {
        super();
        this.app = initApp;
        this.listItem = listItem; 
    }

    doTransaction() {
        this.indexOfDeletion = this.app.deleteItem(this.listItem);
    }

    undoTransaction() {
        this.app.addListItemAtIndex(this.listItem,this.indexOfDeletion)
    }
}