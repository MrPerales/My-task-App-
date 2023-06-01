import React from "react";
import { TodoForm } from "../components/TodoForm.js";


function EditToDoPage(){
    return (
        <TodoForm
        label='Edit your task'
        submitText='Edit'
        submitEvent={()=>console.log('edit ToDos')}
    />
    );
}

export {EditToDoPage};