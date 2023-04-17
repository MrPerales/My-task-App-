import React from "react";
import { AppUI } from "./AppUI.js";
import { ToDoProvider } from "./ToDoContext/ToDoContext.js";

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


  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>

  );
}

export default App;


