import React from "react";
import { TodoHeader } from "./components/TodoHeader.js";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import { TodoItem } from "./components/TodoItem.js";
import { ToDoContext } from "./ToDoContext/ToDoContext.js";
import { Modal } from "./Modal/index.js";
import { TodoForm } from "./components/TodoForm.js";
import { TodoError } from "./components/TodoError.js";
import { TodoLoading } from "./components/TodoLoading.js";
import { EmptyTodo } from "./components/EmptyTodo.js";
function AppUI() {

    const { error,
        loading,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal,
        totalTask,
        completedTask,
        searchValue,
        setSearchValue
    } = React.useContext(ToDoContext);

    return (
        <>
            <TodoHeader />
            <TodoCounter 
                totalTask={totalTask}
                completedTask={completedTask}    
            />

            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />


            
            <TodoList>
                {/* if loading = true render <TodoLoading/> */}
                {loading && <TodoLoading/>}
                {/* if error = true render <TodoError/> */}
                {error && <TodoError/>}
                {/* if loading is false and searchToDos.length=0 render <EmptyTodo/> */}
                {(!loading && !searchedToDos.length) && <EmptyTodo/>}


                 

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

            {/* if openModal is True render that*/}
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}



            <CreateTodoButton 
                setOpenModal={setOpenModal}
                openModal={openModal}
            />

        </>
    );
}

export { AppUI };