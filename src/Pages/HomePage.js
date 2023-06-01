import React from "react";
import { useNavigate } from "react-router-dom";

import { useToDos } from "../useToDos";
import { TodoHeader } from "../components/TodoHeader";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton.js";
import { TodoItem } from "../components/TodoItem.js";
import { Modal } from "../Modal/index.js";
import { TodoError } from "../components/TodoError.js";
import { TodoLoading } from "../components/TodoLoading.js";
import { EmptyTodo } from "../components/EmptyTodo.js";
import { ChangeAlert } from "../changeAlert/index.js";


function HomePage() {

  const navigate = useNavigate();
  const { states, statesUpdates } = useToDos();
  const {
    error,
    searchedToDos,
    loading,
    totalTask,
    // openModal,
    completedTask,
    searchValue,
  } = states;
  const {
    setSearchValue,
    completeToDo,
    deleteToDo,
    // setOpenModal,
    // addToDo,
    synchronizedToDos,
    // setOpenModal
  } = statesUpdates;

  return (
    <>
      <TodoHeader />
      <TodoCounter
        totalTask={totalTask}
        completedTask={completedTask}
        loading={loading}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />

      <TodoList
        Error={error}
        loading={loading}
        searchedToDos={searchedToDos}
        totalTask={totalTask}

        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodo={() => <EmptyTodo />}
        onEmptySearchResults={() =>
          <p> there are not result to: {searchValue}</p>
        }

        render={item => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onEdit={()=>navigate('/edit/'+ item.id)}
            onComplete={() => completeToDo(item.id)}
            onDelete={() => deleteToDo(item.id)}
          />
        )}

      >
        {/* children */}
        {/* {item => (
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => completeToDo(item.text)}
            onDelete={() => deleteToDo(item.text)}
          />
        )} */}
      </TodoList>


      {/* if openModal is True render that*/}
      {/* {openModal && (
        <Modal>
          <TodoForm
            addToDo={addToDo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )} */}



      <CreateTodoButton
        onClick={()=>navigate('/new')}
        // setOpenModal={setOpenModal}
        // openModal={openModal}
      />

      <ChangeAlert
        synchronize={synchronizedToDos}
      />




    </>
  );

}

export  {HomePage};


