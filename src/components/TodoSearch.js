import React from "react";
import '../Style-Components/todoSearch.css';

function TodoSearch(){

    const [searchValue,setSearchValue]= React.useState('');

    //  methods for onChange 
    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    
    return[
        <div className="input">
            <input 
                className="inputSearch"
                placeholder="search task"
                value={searchValue}
                onChange={onSearchValueChange}
            >
            </input>
            {/* <button className="searchBtn">🔍</button> */}
        </div>,
        
        <p>{searchValue}</p>
    ];
}

export {TodoSearch};