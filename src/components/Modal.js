import React from 'react';

const Modal = ({ id, closeModal, children, active }) => {
    const modalClassName = active ? 'modal active' : 'modal';
    const overlayClassName = active ? 'overlay active' : 'overlay';

    return (
        <>
            <div id={id} className={modalClassName}>
                <div className="modal-content">
                    {children}
                    {<button className="close-button" onClick={() => closeModal(id)}>
                        &times;
                    </button>}
                </div>
            </div>
            <div id="overlay" className={overlayClassName} onClick={() => closeModal(id)}></div>
        </>
    );
}

export default Modal;

