// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'

class ListLink extends Component {
    constructor(props) {
        super(props);
        
        // DISPLAY WHERE WE ARE
        console.log("\t\t\tListLink " + this.props.id + " constructor");
    }

    componentDidMount = () => {
        // DISPLAY WHERE WE ARE
        console.log("\t\t\tListLink " + this.props.id + " did mount");
    }

    handleLoadList = () => {
        this.props.loadToDoListCallback(this.props.toDoList);
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\t\t\tListLink render");

        const highlight = this.props.currentList.id ===
            this.props.id ? 'highlight':'no-highlight'


        return (
            <div 
                className='todo-list-button'
                onClick={this.handleLoadList}
                id={highlight}
            >
                {this.props.toDoList.name}<br />
            </div>
        )
    }
}

export default ListLink;