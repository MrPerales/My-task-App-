import React from "react";
import { TodoHeader } from "./components/TodoHeader.js";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import { TodoItem } from "./components/TodoItem.js";
import { ToDoContext } from "./ToDoContext/ToDoContext.js";

function AppUI() {

    const { error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo } = React.useContext(ToDoContext);

    return (
        <>
            <TodoHeader />
            <TodoCounter />

            <TodoSearch />



            <TodoList>
                {loading && <p>loading....</p>}
                {error && <p>Fatal Error....</p>}
                {(!loading && !searchedToDos.length) && <p>create your first Task</p>}



                {searchedToDos.map(item => (
                    <TodoItem
                        key={item.text}
                        text={item.text}
                        completed={item.completed}
                        onComplete={() => completeToDo(item.text)}
                        onDelete={() => deleteToDo(item.text)}
                    />
                ))
                }

            </TodoList>




            <CreateTodoButton />



        </>
    );
}

export { AppUI };