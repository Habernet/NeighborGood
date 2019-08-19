import React, { Component } from 'react';

import Modal from '../components/Modal';

class ModalTest extends Component {

   constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>
                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>
                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>
                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
  </Modal>
{/* <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
css    </Modal> */}

            </div>
        );
    }
}

export default ModalTest;