import React from "react";
import { TodoForm } from "../components/TodoForm.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useToDos } from "../useToDos.js";
import { LoadingSpinner } from "../components/TodoLoading.js";


function EditToDoPage() {
    const params = useParams();
    // forzamos a que sea un  numero y no un string 
    const id = Number(params.id);

    const { states, statesUpdates } = useToDos();
    const { getToDo, loading } = states;
    const { editToDo } = statesUpdates;
   
    const location =useLocation();
    console.log(location,'location');
    
    let toDoText;

    if(location.state?.item){

        toDoText= location.state.item.text
        console.log(toDoText,'toDoText');
    }else if (loading) {
        return <LoadingSpinner/>
    } else {
        const toDo = getToDo(id)
        toDoText=toDo.text;
        // console.log({toDo});
    }
    return (
        <TodoForm
            loading={loading}
            label='Edit your task'
            defaultToDoText={toDoText}
            submitText='Edit'
            submitEvent={(EditText) => editToDo(id, EditText)}
        />
    );
}

export { EditToDoPage };