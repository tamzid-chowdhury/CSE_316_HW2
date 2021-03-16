// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlyEditingTask: false
        }
    }

    makeTaskEditable = () => {
        this.setState({
            currentlyEditingTask: true
        })
    }

    handleEditTask = (event) => { 
        let newTask = event.target.value
        if(newTask != this.props.description){
            this.props.editTaskCallback(this.props.listItem,newTask)
        }


        this.setState({
            currentlyEditingTask: false
        })
    }

    render() {

        if (!this.state.currentlyEditingTask) {
            return (
                <div
                    className='item-col task-col'
                    onClick={this.makeTaskEditable}>
                    {this.props.description}
                </div>
            )
        }
        else {
            return (
                    <input
                        className='item-col task-col'
                        id='selector'
                        defaultValue={this.props.description}
                        autoFocus
                        onBlur={this.handleEditTask}
                    >
                    </input>
            )
        }

    }
}

export default Task;