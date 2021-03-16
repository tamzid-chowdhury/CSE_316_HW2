'use strict'

// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import { jsTPS_Transaction } from "../common/jsTPS.js"

// THIS TRANSACTION IS FOR REMOVING A NEW ITEM TO A TODO LIST
export default class EditStatus_Transaction extends jsTPS_Transaction {
    constructor(initApp,listItem,newStatus) {
        super();
        this.app = initApp;
        this.listItem = listItem; 
        this.oldStatus = listItem.status;
        this.newStatus = newStatus; 
    }

    doTransaction() {
        this.app.editStatus(this.listItem,this.newStatus)
    }

    undoTransaction() {
        this.app.editStatus(this.listItem,this.oldStatus)
    }
}