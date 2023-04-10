// import './App.css';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";


const toDos = [
  {
    text: 'cut',
    competed: false,
  },
  {
    text: 'pay rent',
    competed: false,
  },
  {
    text: 'meeting',
    competed: false,
  }
];

function App() {
  return (
    <>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {toDos.map(item =>(
          <TodoItem key={item.text} text={item.text}/>
          ))
        }
      
      </TodoList>

      <CreateTodoButton/>
   


    </>
  );
}

export default App;


