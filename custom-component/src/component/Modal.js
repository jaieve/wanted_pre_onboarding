import React, {useState} from 'react';
import ComponentName from "./ComponentName";

function Modal(props) {
    const [modalVisible, setModalVisible] = useState(false);

    const btn_style = {
        display: 'block',
        width: '150px',
        height: '100px',
        backgroundColor: '#7b1cb6',
        color: 'white',
        borderRadius: '25px'
    }
    const modalOverlayStyle = {
        boxSizing: 'border-box',
        display: modalVisible ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.6)',
        zIndex: 999
    }
    const modalWrapperStyle = {
        boxSizing: 'border-box',
        display: modalVisible ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1000,
        overflow: 'auto',
        outline: 0
    }
    const modalInnerStyle = {
        boxSizing: 'border-box',
        position: 'relative',
        boxShadow: '0 0 6px 0 rgba(0,0,0,0,.5)',
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: '360px',
        maxWidth: '480px',
        top: '50%',
        transform: 'translateY(-50%)',
        margin: '0 auto',
        padding: '40px 20px'
    }
    const closeIconStyle = {
        display: 'block',
        margin: '1rem 0',
        fontSize: '16px',
        cursor : 'pointer'
    }
    const openModal = () => {
        setModalVisible(true);
    }
    const closeModal = () => {
        setModalVisible(false);
    }
    return (
        <div className="row h-25">
            <ComponentName componentsName="Modal"/>
            <div className="row justify-content-center">
                <button className="border-0" type="button" style={btn_style}
                        onClick={openModal}>Open Modal
                </button>
                {modalVisible && <div id="modal"
                                      visible={modalVisible}
                                      onClose={closeModal}
                >
                    <div id="modalOverlay" visible={modalVisible} style={modalOverlayStyle}/>
                    <div id="modalWrapper" className="modal" style={modalWrapperStyle} tabIndex="-1"
                         visible={modalVisible}>
                        <div id="modalInner" className="modal-inner text-center" style={modalInnerStyle} tabIndex="0">
                            <div className="header text-center mb-5 mt-0"
                                 style={closeIconStyle}
                                 onClick={closeModal}>
                                    &times;
                            </div>
                            <span>HELLO I'm JAIEVE!</span>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
}

export default Modal;