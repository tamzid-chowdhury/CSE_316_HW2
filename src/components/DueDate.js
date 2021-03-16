// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'

class DueDate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlyEditingDueDate: false
        }
    }

    makeDueDateEditable = () => {
        this.setState({
            currentlyEditingDueDate: true
        })
    }

    handleEditDueDate = (event) => { 
        if(event.target.value){
            if(event.target.value != this.props.dueDate){
                let newDueDate = event.target.value
                this.props.editDueDateCallback(this.props.listItem,newDueDate)
            }
        }
        this.setState({
            currentlyEditingDueDate: false
        })
    }

    render() {

        if (!this.state.currentlyEditingDueDate) {
            return (
                <div
                    className='item-col due-date-col'
                    onClick={this.makeDueDateEditable}>
                    {this.props.dueDate}
                </div>
            )
        }
        else {
            return (
                    <input
                        type='date'
                        defaultValue={this.props.dueDate}
                        className='item-col due-date-col'
                        id='selector'
                        autoFocus
                        onBlur={this.handleEditDueDate}
                    >
                    </input>
            )
        }

    }
}

export default DueDate;