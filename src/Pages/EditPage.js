import React from "react";
import { TodoForm } from "../components/TodoForm.js";
import { useParams } from "react-router-dom";
import { useToDos } from "../useToDos.js";


function EditToDoPage(){
    const  params =useParams();
    // forzamos a que sea un  numero y no un string 
    const id=Number(params.id);
    const {statesUpdates}=useToDos();
    const {editToDo}=statesUpdates;


    return (
        <TodoForm
        label='Edit your task'
        submitText='Edit'
        submitEvent={(EditText)=>editToDo(id,EditText)} 
    />
    );
}

export {EditToDoPage};