import React from "react";
import ReactDOM  from "react-dom";
import './modal.css';

function Modal(props){
    return ReactDOM.createPortal(
        <div className="modalContainer">
            {props.children}
        </div>,
        document.querySelector('#modal')
    );
}

export {Modal};