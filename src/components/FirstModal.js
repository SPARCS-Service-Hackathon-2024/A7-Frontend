import React from 'react';
import Modal from 'react-modal';
import './FirstModal.css';

const FirstModal = ({ isOpen, onRequestClose, onSelectNumberOfPeople }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="First Modal"
            className="Modal-1"
            overlayClassName="Overlay"
            ariaHideApp={false}
        >
            <div className="modal-content">
                <div className="button-container">
                    <button onClick={() => onSelectNumberOfPeople('1명')} className="modal-button">1명</button>
                    <button onClick={() => onSelectNumberOfPeople('2명')} className="modal-button">2명</button>
                    <button onClick={() => onSelectNumberOfPeople('3명')} className="modal-button">3명</button>
                    <button onClick={() => onSelectNumberOfPeople('4명 이상')} className="modal-button">4명 이상</button>
                </div>
            </div>
        </Modal>
    );
}

export default FirstModal;