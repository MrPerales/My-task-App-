import React from "react";
import '../Style-Components/todoSearch.css';

function TodoSearch(){
    return(
        <div className="input">
            <input className="inputSearch" placeholder="search task"></input>
            <button className="searchBtn">🔍</button>
        </div>
    );
}

export {TodoSearch};