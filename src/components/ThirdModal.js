import React from 'react';
import Modal from 'react-modal';
import './ThirdModal.css';

const FirstModal = ({ isOpen, onRequestClose, onSelectStatus }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Third Modal"
            className="Modal-3"
            overlayClassName="Overlay"
            ariaHideApp={false}
        >
            <div className="modal-content">
                <div className="button-container">
                    <button onClick={() => onSelectStatus('학생')} className="modal-button-3">학생</button>
                    <button onClick={() => onSelectStatus('직장인')} className="modal-button-3">직장인</button>
                    <button onClick={() => onSelectStatus('기타')} className="modal-button-3">기타</button>
                </div>
            </div>
        </Modal>
    );
}

export default FirstModal;