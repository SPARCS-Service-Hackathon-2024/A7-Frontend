import React from 'react';
import Modal from 'react-modal';
import './FirstModal.css';

const FirstModal = ({ isOpen, onRequestClose, onSelectNumberOfWeek }) => {
    return (
        <Modal
            isOpen={isOpen}
            contentLabel="Second Modal"
            className="Modal-1"
            overlayClassName="Overlay"
            ariaHideApp={false}
        >
            <div className="modal-content">
                <div className="button-container">
                    <button onClick={() => onSelectNumberOfWeek('1주')} className="modal-button">1주</button>
                    <button onClick={() => onSelectNumberOfWeek('2주')} className="modal-button">2주</button>
                    <button onClick={() => onSelectNumberOfWeek('3주')} className="modal-button">3주</button>
                    <button onClick={() => onSelectNumberOfWeek('4주 이상')} className="modal-button">4주</button>
                </div>
            </div>
        </Modal>
    );
}

export default FirstModal;