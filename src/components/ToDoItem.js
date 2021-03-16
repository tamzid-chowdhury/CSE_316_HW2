// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Close from '@material-ui/icons/Close';
import Task from './Task'
import DueDate from './DueDate'
import Status from './Status'

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        
        // DISPLAY WHERE WE ARE
        console.log("\t\t\tToDoItem " + this.props.toDoListItem.id + " constructor");
    }

    componentDidMount = () => {
        // DISPLAY WHERE WE ARE
        console.log("\t\t\tToDoItem " + this.props.toDoListItem.id + " did mount");
    }

    handleMoveUp = () => {
        let listItem = this.props.toDoListItem;
        this.props.moveUpCallback(listItem)
    }

    handleMoveDown = () => {
        let listItem = this.props.toDoListItem;
        this.props.moveDownCallback(listItem);
    }

    handleDeleteItem = () => {
        let listItem = this.props.toDoListItem;
        this.props.deleteItemCallback(listItem);
    }


    render() {
        // DISPLAY WHERE WE ARE
        console.log("\t\t\tToDoItem render");
        let listItems = this.props.toDoListItems; 
        let listItem = this.props.toDoListItem;
        let statusType = "status-complete";
        if (listItem.status === "incomplete")
            statusType = "status-incomplete";

        return (
            <div id={'todo-list-item-' + listItem.id} className='list-item-card'>
                <Task 
                    description={listItem.description}
                    listItem={listItem}
                    editTaskCallback={this.props.editTaskCallback}
                />
                <DueDate 
                    dueDate={listItem.due_date}
                    listItem={listItem}
                    editDueDateCallback={this.props.editDueDateCallback}
                />
                <Status 
                    status={listItem.status}
                    listItem={listItem}
                    editStatusCallback={this.props.editStatusCallback}
                />
                <div className='item-col list-controls-col'>
                    {listItems[0] != listItem ?
                    <KeyboardArrowUp className='list-item-control todo-button' onClick={this.handleMoveUp}/> : 
                    <KeyboardArrowUp className='list-item-control todo-button' id='hidden-add-box' onClick={this.handleMoveUp}/>}

                    {listItems[listItems.length-1] != listItem ?
                    <KeyboardArrowDown className='list-item-control todo-button' onClick={this.handleMoveDown} /> :
                    <KeyboardArrowDown className='list-item-control todo-button' id='hidden-add-box' onClick={this.handleMoveDown} />}
                    <Close className='list-item-control todo-button' onClick={this.handleDeleteItem}/>
                    <div className='list-item-control'></div>
        <div className='list-item-control'></div>
                </div>
            </div>
        )
    }
}

export default ToDoItem;