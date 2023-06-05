import React from "react";
import { useLocalStorage } from "./Hooks/useLocalStorage";


function useToDos() {

  //hooks 
  const {
    item: toDos,
    saveToDos: saveToDos, // saveItem:saveToDos
    loading,
    error,
    synchronizeItem: synchronizedToDos,
  } = useLocalStorage('ToDos_V2', []);

  // const [openModal, setOpenModal] = React.useState(false);
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
    // mandamos de parametro el array para generar los ids
    const id = newToDoId(toDos);
    const newToDos = [...toDos];
    newToDos.push({
      completed: false,
      text,
      id,
    });
    saveToDos(newToDos);
  }
  //  add check
  const completeToDo = (id) => {
    // search the index
    const toDoIndex = toDos.findIndex((item) => item.id === id)

    const newToDos = [...toDos];
    newToDos[toDoIndex].completed = true;

    saveToDos(newToDos);

  }
  // get toDo del localStorage para la edit
  const getToDo=(id)=>{
    const toDoIndex=toDos.findIndex((item)=>item.id===id)
    return toDos[toDoIndex];

  }
  //  Edit check
  const editToDo = (id, newText) => {
    // search the index
    const toDoIndex = toDos.findIndex((item) => item.id === id)

    const newToDos = [...toDos];
    newToDos[toDoIndex].text = newText;

    saveToDos(newToDos);

  }


  // delete task
  const deleteToDo = (id) => {
    // search index
    const toDoIndex = toDos.findIndex((item) => item.id === id);
    const newToDos = [...toDos];
    // splice elimina un elemento del array 
    //       .splice(index,elementos a eliminar )
    newToDos.splice(toDoIndex, 1)
    saveToDos(newToDos)
  }





  const states = {
    error,
    loading,
    totalTask,
    completedTask,
    searchValue,
    searchedToDos,
    // openModal,
    getToDo,

  }
  const statesUpdates = {

    setSearchValue,
    completeToDo,
    deleteToDo,
    // setOpenModal,
    // saveToDos,
    addToDo,
    editToDo,
    synchronizedToDos,
  }

  return { states, statesUpdates };
}

const newToDoId = todoList => {
  if (!todoList.length) {
    return 1;
  }

  const idList = todoList.map(item => item.id)
  // regresa el numero mas grande del array 
  const idMax = Math.max(...idList);
  return idMax + 1;



}
export { useToDos };