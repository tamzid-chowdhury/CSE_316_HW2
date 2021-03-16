'use strict'

// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import { jsTPS_Transaction } from "../common/jsTPS.js"

// THIS TRANSACTION IS FOR REMOVING A NEW ITEM TO A TODO LIST
export default class EditTask_Transaction extends jsTPS_Transaction {
    constructor(initApp,listItem,newTask) {
        super();
        this.app = initApp;
        this.listItem = listItem; 
        this.oldTask = listItem.description;
        this.newTask = newTask; 
    }

    doTransaction() {
        this.app.editTask(this.listItem,this.newTask)
    }

    undoTransaction() {
        this.app.editTask(this.listItem,this.oldTask)
    }
}