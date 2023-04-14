// import './App.css';
import React from "react";
import { AppUI } from "./AppUI.js";


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

  //localStorage
  const localStorageToDos = localStorage.getItem('ToDos_V1');
  let parsedToDos;
  //para usuarios nuevos no tienen ningun ToDo 
  if (!localStorageToDos) {
    //como no han creado un ToDo dejamos un array vacio 
    localStorage.setItem('ToDos_V1', JSON.stringify([]))
    parsedToDos = [];
  } else {
    //ya que tengan solo 1 ToDo esta en el local storage pero lo transformamos en array
    parsedToDos = JSON.parse(localStorageToDos);
  }



  //    [array, function] 
  const [toDos, setToDos] = React.useState(parsedToDos);
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

  // save Task 
  const saveToDos=(newToDos)=>{
    //convertimos el array en string 
    const stringifiedToDos=JSON.stringify(newToDos);
    //guardamos la info en ToDos_v1
    localStorage.setItem('ToDos_V1',stringifiedToDos);
    //modificamos el estado con el metodo seToDos
    setToDos(newToDos);
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


