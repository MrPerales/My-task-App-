import React from "react";
import { TodoForm } from "../components/TodoForm.js";


function NewToDoPage(){
    return (
        <TodoForm
            label='Write your new task'
            submitText='Add'
            submitEvent={()=>console.log('add new ToDos')}
        />
    );
}

export {NewToDoPage};