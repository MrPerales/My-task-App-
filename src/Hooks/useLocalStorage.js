import React from "react";

function useLocalStorage(itemName,initialValue){
    //localStorage
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    //para usuarios nuevos no tienen ningun ToDo 
    if (!localStorageItem) {
      //como no han creado un ToDo dejamos un array vacio 
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue;
    } else {
      //ya que tengan solo 1 ToDo esta en el local storage pero lo transformamos en array
      parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);
    
      // save Task 
      const saveToDos=(newItem)=>{
        //convertimos el array en string 
        const stringifiedItem=JSON.stringify(newItem);
        //guardamos la info en ToDos_v1
        localStorage.setItem(itemName,stringifiedItem);
        //modificamos el estado con el metodo seToDos
        setItem(newItem);
      };
  
      return[
        item,
        saveToDos
      ];
    
  }
  


export {useLocalStorage};