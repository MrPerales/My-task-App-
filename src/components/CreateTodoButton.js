import React from "react";
import '../Style-Components/createTodoButton.css'

function CreateTodoButton(props) {

    // const onclickButton=()=>{
    //     // if openModal is true change the state 
    //     if(props.openModal){
    //         props.setOpenModal(false)
    //     }else{
    //         props.setOpenModal(true)
    //     }

    // }

    return (

        <button 
            className="createBtn"
            onClick={props.onClick}
        >
            +
        
        </button>
    );
}
export { CreateTodoButton };