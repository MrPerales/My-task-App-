import React from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";


function useToDos() {

  //hooks 
  const {
    item: toDos,
    saveToDos:saveToDos, // saveItem:saveToDos
    loading,
    error
  } = useLocalStorage('ToDos_V1', []);

  const [openModal, setOpenModal] = React.useState(false);
  //    [array, function] 
  const [searchValue, setSearchValue] = React.useState('');

  // variables to count the tasks
  const completedTask = toDos.filter(item => !!item.completed).length;
  const totalTask = toDos.length;

  // filter text to search    (input) 
  let searchedToDos = [];

  if (searchValue.length >= 1) {
    // create a new array where could have a coincidence with the search
    searchedToDos = toDos.filter(item => {
      const toDoText = item.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // cuales de todas las tareas contiene en alguna parte el texto de busqueda 
      return toDoText.includes(searchText);
    })
  } else {          // si no se hace ninguna busqueda manda el defaultArray:
    searchedToDos = toDos;
  }
  // add ToDo
  const addToDo = (text) => {
    const newToDos = [...toDos];
    newToDos.push({
      completed: false,
      text,
    });
    saveToDos(newToDos);
  }
  //  add check
  const completeToDo = (text) => {
    // search the index
    const toDoIndex = toDos.findIndex((item) => item.text === text)

    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;

    saveToDos(newToDos);

  }
  // delete task
  const deleteToDo = (text) => {
    // search index
    const toDoIndex = toDos.findIndex((item) => item.text === text);
    const newToDos = [...toDos];
    // splice elimina un elemento del array 
    //       .splice(index,elementos a eliminar )
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos)
  }

  return{
      error,
      loading,
      totalTask,
      completedTask,
      searchValue,
      setSearchValue,
      searchedToDos,
      completeToDo,
      deleteToDo,
      openModal,
      setOpenModal,
      // saveToDos,
      addToDo,
    };
}

export { useToDos };