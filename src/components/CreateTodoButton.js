import React from "react";
import '../Style-Components/createTodoButton.css'

function CreateTodoButton(props) {
    return (

        <button 
            className="createBtn"
            onClick={()=> console.log('click')}
        >
            +
        
        </button>
    );
}
export { CreateTodoButton };