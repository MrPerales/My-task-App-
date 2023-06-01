import React from "react";
import { useNavigate } from "react-router-dom";

import '../Style-Components/todoForm.css'

function TodoForm(props) {

    const [newToDoValue, setNewToDoValue] = React.useState('');
    const navigate=useNavigate();
    const onChange = (event) => {
        setNewToDoValue(event.target.value)

    }

    const onCancel = () => {
        navigate('/')
      
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //if the user do not write  any task
        if (newToDoValue.length <= 0) return;
        // else
        props.submitEvent(newToDoValue);
        navigate('/')

    }
    return (
        <div className='container-ToDoForm'>
            <form onSubmit={onSubmit}>

                <label className="formTitle">{props.label}</label>

                <textarea
                    value={newToDoValue}
                    onChange={onChange}
                    placeholder="Write Your Task"
                >
                </textarea>
                <div className="ButtonsContainer">
                    <button
                        className="cancelBtn"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="addBtn"
                        type="submit"
                    >
                        {props.submitText}
                    </button>

                </div>
            </form>
        </div>

    );
}

export { TodoForm }