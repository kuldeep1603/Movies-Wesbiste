import React from 'react'
import Modal from 'react-bootstrap/Modal';


const Modal_Video = ({ show, handleClose, Videos }) => {
    return (
        <>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body className='p-0 bg-primary-1'  style={{ height: "90vh", width: "100% " }}>
                    {
                        Videos ? (
                            <iframe
                                width="100%"
                                style={{ height: "90vh", width: "100% " }}
                                src={`https://www.youtube.com/embed/${Videos.key}`}
                                // FrameBorder="0"
                                allowFullScreen
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                            ></iframe>
                        ) : (
                            <p className='secondary-color text-center'>No Videos Found ..!</p>
                        )
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Modal_Video
