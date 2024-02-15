import React from 'react';
import Modal from 'react-modal';
import './FourthModal.css';

const FirstModal = ({ isOpen, onRequestClose, onSelectCar }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Fourth Modal"
            className="Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
        >
            <div className="modal-content">
                <div className="button-container">
                    <button onClick={() => onSelectCar('있다')} className="modal-button">있다</button>
                    <button onClick={() => onSelectCar('없다')} className="modal-button">없다</button>
                </div>
            </div>
        </Modal>
    );
}

export default FirstModal;