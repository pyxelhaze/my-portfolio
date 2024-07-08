import React, { useState, useEffect } from 'react';

const Modal = ({ id, closeModal, children, active }) => {
    const [clickCount, setClickCount] = useState(0);

    const modalClassName = active ? 'modal active' : 'modal';
    const overlayClassName = active ? 'overlay active' : 'overlay';

    // check if it is a mobile device
    const isMobileDevice = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // mobile clickhandling
    const handleOverlayLinkClick = (event) => {
        if (isMobileDevice()) {
            if (clickCount === 0) {
                event.preventDefault();
                setClickCount(1);
            } else {
                setClickCount(0);
            }
        }
    };
    // 
    useEffect(() => {
        const overlayLinks = document.querySelectorAll('.overlay-link');

        overlayLinks.forEach(overlayLink => {
            overlayLink.addEventListener('click', handleOverlayLinkClick);
        });

        // Cleanup Funktion
        return () => {
            overlayLinks.forEach(overlayLink => {
                overlayLink.removeEventListener('click', handleOverlayLinkClick);
            });
        };
    }, [clickCount]);

    return (
        <>
            <div id={id} className={modalClassName}>
                <div className="modal-content">
                    {children}
                </div>
            </div>
            <div id="overlay" className={overlayClassName} onClick={() => closeModal(id)}></div>
        </>
    );
};

export default Modal;



