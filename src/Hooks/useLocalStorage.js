import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error,setError]=React.useState(false);
  const [loading,setLoading]=React.useState(true)
  const [item, setItem] = React.useState(initialValue);
  const [synchronizedItem,setSynchronizedItem]=React.useState(true);

  // agregamos un segundo parametro un [] para que se ejecute solo una vez el efectp
  React.useEffect(() => {
    setTimeout(() => {
      try{
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
      setItem(parsedItem);
      setLoading(false);
      setSynchronizedItem(true)
      }catch{
        setError(true) 
      }
     
    }, 2500);
  },[synchronizedItem]);

 // save Task 
  const saveToDos = (newItem) => {
    try{
      //convertimos el array en string 
      const stringifiedItem = JSON.stringify(newItem);
      //guardamos la info en ToDos_v1
      localStorage.setItem(itemName, stringifiedItem);
      //modificamos el estado con el metodo seToDos
      setItem(newItem);
    }catch{
      setError(true);
    }
  };
  const synchronizeItem=()=>{
    // como no estamos sincronizados mostramos el estado de carga 
    setLoading(true);
    // cambiamos el estado para no estemos sincronizando ni cargando 
    setSynchronizedItem(false);
  }

  return {
    item,
    saveToDos,
    loading,
    error,
    synchronizeItem,
  };

}



export { useLocalStorage };