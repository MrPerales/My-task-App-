// import './App.css';
import React from "react";
import { AppUI } from "./AppUI.js";
import {useLocalStorage} from './Hooks/useLocalStorage.js'

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
  //hooks 
  const {
    item:toDos,
    saveItem:saveToDos,
    loading,
    error
  }=useLocalStorage('ToDos_V1',[]);

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


  return (

    <AppUI
      error={error}
      loading={loading}
      totalTask={totalTask}
      completedTask={completedTask}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />

  );
}

export default App;


