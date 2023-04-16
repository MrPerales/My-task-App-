import React from "react";
import { TodoHeader } from "./components/TodoHeader.js";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import { TodoItem } from "./components/TodoItem.js";

function AppUI({
    loading,
    error,
    completedTask,
    totalTask,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo,
}) {
    return (
        <>
            <TodoHeader />
            <TodoCounter
                total={totalTask}
                completed={completedTask}
            />

            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {loading &&<p>loading....</p> }
                {error &&<p>Fatal Error....</p> }
                {(!loading && !searchedToDos.length)&& <p>create your first Task</p>}



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