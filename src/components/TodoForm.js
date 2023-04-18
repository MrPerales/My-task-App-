import React from "react";
import '../Style-Components/todoForm.css'
import { ToDoContext } from "../ToDoContext/ToDoContext";

function TodoForm() {

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const {
        addToDo,
        setOpenModal
    } = React.useContext(ToDoContext);

    const onChange = (event) => {
        setNewToDoValue(event.target.value)

    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //if the user do not write  any task
        if(newToDoValue.length <=0)return;
        // else
        addToDo(newToDoValue);
        //para ceerar la ventana al agregar una Task 
        setOpenModal(false);
    }
    return (
        <form onSubmit={onSubmit}>

            <label className="">Write your New Task</label>

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
                    Add
                </button>

            </div>
        </form>
    );
}

export { TodoForm }