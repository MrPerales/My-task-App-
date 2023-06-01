import React from "react";
import { TodoForm } from "../components/TodoForm.js";
import { useToDos } from "../useToDos.js";


function NewToDoPage(){
    const {statesUpdates}=useToDos();
    const {addToDo}=statesUpdates;



    return (
        <TodoForm
            label='Write your new task'
            submitText='Add'
            submitEvent={(newText)=>addToDo(newText)}
        />
    );
}

export {NewToDoPage};