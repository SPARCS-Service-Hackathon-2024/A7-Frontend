import React from 'react';
import Modal from 'react-modal';
import './FirstModal.css';

const FirstModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="First Modal"
            className="Modal"
            ariaHideApp={false}
            overlayClassName="Overlay"
        >
            <div className="modal-content">
                <div className="button-container">
                    <button onClick={onRequestClose} className="modal-button">1명</button>
                    <button onClick={onRequestClose} className="modal-button">2명</button>
                    <button onClick={onRequestClose} className="modal-button">3명</button>
                    <button onClick={onRequestClose} className="modal-button">4명 이상</button>
                </div>
            </div>
        </Modal>
    );
}

export default FirstModal;