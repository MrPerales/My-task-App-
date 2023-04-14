// import './App.css';
import React from "react";
import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";


const defaultToDos = [
  {
    text: 'cut',
    completed: true, 
  },
  {
    text: 'pay rent',
    completed: true,
  },
  {
    text: 'meeting',
    completed: false,
  },
  {
    text: 'jajaja',
    completed: false,
  }
  

];

function App() {
  //    [array, function] 
  const [toDos,setToDos]=React.useState(defaultToDos);
  const [searchValue,setSearchValue]= React.useState('');

  // variables to count the tasks
  const completedTask=toDos.filter(item=>!!item.completed).length;
  const totalTask=toDos.length;

  // filter text to search    (input) 
  let searchedToDos=[];

  if(searchValue.length>=1){
    // create a new array where could have a coincidence with the search
    searchedToDos= toDos.filter(item=>{
      const toDoText=item.text.toLowerCase();
      const searchText=searchValue.toLowerCase();
      // cuales de todas las tareas contiene en alguna parte el texto de busqueda 
      return toDoText.includes(searchText);
    })
  }else{          // si no se hace ninguna busqueda manda el defaultArray:
    searchedToDos=toDos;
  }
  //  add check
  const completeToDo=(text)=>{
    // search the index
    const toDoIndex =toDos.findIndex((item) => item.text === text)
    
    const newToDos=[...toDos];
    newToDos[toDoIndex].completed=true;
    
    setToDos(newToDos);

  }
  // delete task
  const deleteToDo=(text)=>{
    // search index
    const toDoIndex=toDos.findIndex((item)=>item.text===text);
    const newToDos=[...toDos];
    // splice elimina un elemento del array 
    //       .splice(index,elementos a eliminar )
    newToDos.splice(toDoIndex,1)
    setToDos(newToDos)
  }

  
  return (
    <>
      <TodoHeader/>
      <TodoCounter
        completed={completedTask}
        total={totalTask}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedToDos.map(item =>(
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            onComplete={()=>completeToDo(item.text)}
            onDelete={()=> deleteToDo(item.text)}
            />
          ))
        }
      
      </TodoList>

      <CreateTodoButton/>
   


    </>
  );
}

export default App;


