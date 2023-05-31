import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { NewToDoPage } from "./Pages/NewToDoPage";
import { EditToDoPage } from "./Pages/EditPage";
import { NotFoundPage } from "./Pages/NotFoundPage";


function App() {
  

  return (
    <HashRouter>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/new" element={<NewToDoPage/>}/>
        <Route path="/edit/:id" element={<EditToDoPage/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
      </Routes>
    </HashRouter>
  );

}

export  {App};


