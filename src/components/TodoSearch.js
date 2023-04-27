import React from "react";
import '../Style-Components/todoSearch.css';

function TodoSearch({searchValue,setSearchValue,loading}){


    //  methods for onChange 
    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    
    return(
        <div className="input">
            <input 
                className="inputSearch"
                placeholder="search task"
                value={searchValue}
                onChange={onSearchValueChange}
                // simulacion de carga
                disabled={loading}
            >
            </input>
            {/* <button className="searchBtn">🔍</button> */}
        </div>
    );
}

export {TodoSearch};