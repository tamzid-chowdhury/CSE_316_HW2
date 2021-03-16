'use strict'

// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import { jsTPS_Transaction } from "../common/jsTPS.js"

// THIS TRANSACTION IS FOR ADDING A NEW ITEM TO A TODO LIST
export default class MoveItemDown_Transaction extends jsTPS_Transaction {
    constructor(initApp,listItem) {
        super();
        this.app = initApp;
        this.listItem = listItem;
    }

    doTransaction() {
        this.app.moveItemDown(this.listItem);
    }

    undoTransaction() {
        this.app.moveItemUp(this.listItem);
    }
}