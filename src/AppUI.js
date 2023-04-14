import React from "react";
import { TodoHeader } from "./components/TodoHeader.js";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import { TodoItem } from "./components/TodoItem.js";

function AppUI({
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