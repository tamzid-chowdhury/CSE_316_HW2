// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'

class DeleteModal extends Component {
    constructor(props) {
        super(props);


    }


    render() {
        if (this.props.deleteModalOpen == true) {

            return (
            <div id="myModal" className="modal">
               <div className="modal-content">
                    <span className="close" onClick={this.props.closeDeleteModal}>&times;</span>
                    <header id='model-title'>Delete List?</header>
                    <div id="confirm-cancel-buttons">
                        <div><button onClick={this.props.deleteListCallback}>Confirm</button></div>
                        <div><button onClick={this.props.closeDeleteModal}>Cancel</button></div>
                    </div>
                </div>
             </div>)
        }
        return null
    }
}

export default DeleteModal;