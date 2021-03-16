'use strict'

// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import { jsTPS_Transaction } from "../common/jsTPS.js"

// THIS TRANSACTION IS FOR REMOVING A NEW ITEM TO A TODO LIST
export default class EditDueDate_Transaction extends jsTPS_Transaction {
    constructor(initApp,listItem,newDueDate) {
        super();
        this.app = initApp;
        this.listItem = listItem; 
        this.oldDueDate = listItem.due_date
        this.newDueDate = newDueDate; 
    }

    doTransaction() {
        this.app.editDueDate(this.listItem,this.newDueDate)
    }

    undoTransaction() {
        this.app.editDueDate(this.listItem,this.oldDueDate)
    }
}