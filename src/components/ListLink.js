// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'

class ListLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlyEditingListName: false
        }
        
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

    makeListNameEditable = () => {
        this.setState({
            currentlyEditingListName: true
        })
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\t\t\tListLink render");

            
        if(this.props.currentList.id ===this.props.id){
            if(!this.state.currentlyEditingListName){
                return (
                    <div 
                        className='todo-list-button'
                        onClick={this.makeListNameEditable}
                        id='highlight'
                    >
                        {this.props.toDoList.name}<br />
                    </div>
                )
            }
            else{
                return (
                    <div
                        className='todo-list-button'
                        id='highlight'
                    >
                        <input
                            value={this.props.toDoList.name}
                        >
                        </input>
                    </div>
                )
            }

        }

        else{
            return (
                <div 
                    className='todo-list-button'
                    onClick={this.handleLoadList}
                    id='no-highlight'
                >
                    {this.props.toDoList.name}<br />
                </div>
            )
        }
    }
}

export default ListLink;