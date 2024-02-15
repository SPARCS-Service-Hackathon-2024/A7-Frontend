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
                    <button onClick={() => onSelectNumChild('1명')} className="modal-button">1명</button>
                    <button onClick={() => onSelectNumChild('2명')} className="modal-button">2명</button>
                </div>
            </div>
        </Modal>
    );
}

export default FirstModal;