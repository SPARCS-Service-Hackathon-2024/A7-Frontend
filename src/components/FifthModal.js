import React from 'react';
import Modal from 'react-modal';
import './FourthModal.css';

const FirstModal = ({ isOpen, onRequestClose, onSelectNumChild }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Fifth Modal"
            className="Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
        >
            <div className="modal-content">
                <div className="button-container">
                    <button onClick={() => onSelectNumChild('그렇다')} className="modal-button">그렇다</button>
                    <button onClick={() => onSelectNumChild('아니다')} className="modal-button">아니다</button>
                </div>
            </div>
        </Modal>
    );
}

export default FirstModal;