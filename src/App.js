import React from "react";

import { useToDos } from "./useToDos.js";
import { TodoHeader } from "./components/TodoHeader.js";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import { TodoItem } from "./components/TodoItem.js";
import { Modal } from "./Modal/index.js";
import { TodoForm } from "./components/TodoForm.js";
import { TodoError } from "./components/TodoError.js";
import { TodoLoading } from "./components/TodoLoading.js";
import { EmptyTodo } from "./components/EmptyTodo.js";
import { ChangeAlertWithStorageListener } from "./changeAlert/index.js";

// const defaultToDos = [
//   {
//     text: 'cut',
//     completed: true,
//   },
//   {
//     text: 'pay rent',
//     completed: true,
//   },
//   {
//     text: 'meeting',
//     completed: false,
//   },
//   {
//     text: 'jajaja',
//     completed: false,
//   },
//   {
//     text: 'jajaja',
//     completed: false,
//   },
//   {
//     text: 'jajaja',
//     completed: false,
//   }


// ];

function App() {

  const {
    error,
    loading,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
    totalTask,
    completedTask,
    searchValue,
    setSearchValue,
    addToDo,
    synchronizedToDos,
    // setOpenModal
  } = useToDos();

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
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={() => completeToDo(item.text)}
            onDelete={() => deleteToDo(item.text)}
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
      {openModal && (
        <Modal>
          <TodoForm
            addToDo={addToDo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}



      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

        <ChangeAlertWithStorageListener
            synchronize={synchronizedToDos}
        />




    </>
  );

}

export default App;


