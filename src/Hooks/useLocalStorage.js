import React from "react";

function useLocalStorage(itemName, initialValue) {

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))
  const {
    error,
    loading,
    item,
    synchronizedItem
  } = state;

  //ACTIONS CREATORS 
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  }
  const onSuccess = (item) => {
    dispatch({ type: actionTypes.success, payload: item })
  }
  const onSave = (item) => {
    dispatch({type:actionTypes.save,payload:item})
  }
  const onSync=()=>{
    dispatch({type:actionTypes.sync})
  }

  // agregamos un segundo parametro un [] para que se ejecute solo una vez el efectp
  React.useEffect(() => {
    setTimeout(() => {
      try {
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
        onSuccess(parsedItem);
        // setItem(parsedItem);
        // setLoading(false);
        // setSynchronizedItem(true)
      } catch (error) {
        // setError(true)
        onError(error);
      }

    }, 2500);
  }, [synchronizedItem]);

  // save Task 
  const saveToDos = (newItem) => {
    try {
      //convertimos el array en string 
      const stringifiedItem = JSON.stringify(newItem);
      //guardamos la info en ToDos_v1
      localStorage.setItem(itemName, stringifiedItem);
      //modificamos el estado con el metodo seToDos
      // setItem(newItem);
      onSave(newItem);
    } catch (error) {
      // setError(true);
      onError(error);
    }
  };
  const synchronizeItem = () => {
    // como no estamos sincronizados mostramos el estado de carga 
    // setLoading(true);
    // cambiamos el estado para no estemos sincronizando ni cargando 
    // setSynchronizedItem(false);
    // esta fucnion hace lo mismo de arriba 
    onSync();
  }

  return {
    item,
    saveToDos,
    loading,
    error,
    synchronizeItem,
  };

}
// la hacemos funcion para poder obtener el valor initialValue 
const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
  synchronizedItem: true
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save:'SAVE',
  sync:'SYNC',
}
// conbinacion de estados 
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    synchronizedItem: true,
    item: payload,
  },
  [actionTypes.save]:{
    ...state,
    item:payload,
  },
  [actionTypes.sync]:{
    ...state,
    loading:true,
    synchronizedItem:false,
  }

})

const reducer = (state,action) => {
  // para ahorrarnos el condicional 
  return reducerObject(state, action.payload)[action.type] || state;
}



export { useLocalStorage };