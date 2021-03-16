// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'

class Status extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentlyEditingStatus: false
        }
    }

    makeStatusEditable = () => {
        this.setState({
            currentlyEditingStatus: true
        })
    }

    handleEditStatus = (event) => { 
        let newStatus = event.target.value
        if(newStatus != this.props.status){
            this.props.editStatusCallback(this.props.listItem,newStatus)
        }
        this.setState({
            currentlyEditingStatus: false
        })
    }

    render() {
        let statusType = "status-complete";
        if (this.props.listItem.status === "incomplete")
            statusType = "status-incomplete";

        if (!this.state.currentlyEditingStatus) {
            return (
                <div
                    className={statusType}
                    onClick={this.makeStatusEditable}>
                    {this.props.status}
                </div>
            )
        }
        else {
            return (
                    <select
                        className='item-col'
                        id='status-selector'
                        autoFocus
                        onBlur={this.handleEditStatus}
                    >
                        <option>complete</option>
                        <option>incomplete</option>
                    </select>
            )
        }

    }
}

export default Status;