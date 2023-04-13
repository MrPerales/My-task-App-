// import './App.css';
import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";


const toDos = [
  {
    text: 'cut',
    completed: true, 
  },
  {
    text: 'pay rent',
    completed: false,
  },
  {
    text: 'meeting',
    completed: false,
  }
];

function App() {
  return (
    <>
      <TodoHeader/>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {toDos.map(item =>(
          <TodoItem
            key={item.text}
            text={item.text}
            completed={item.completed}
            />
          ))
        }
      
      </TodoList>

      <CreateTodoButton/>
   


    </>
  );
}

export default App;


