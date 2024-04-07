import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer';

//initial state
const initialState = {
  // transactions:[
  //   { id: 1, text: 'Flower', amount: -20 },
  //   { id: 2, text: 'Salary', amount: 300 },
  //   { id: 3, text: 'Book', amount: -10 },
  //   { id: 4, text: 'Camera', amount: 150 }
  //   ]
  transactions:[]
}



// Create context
export const GlobalContext = createContext(initialState);


//Provide component
export const GlobalProvider=({children})=>{

  const[state,dispatch]=useReducer(AppReducer,initialState);

  //Actions
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payLoad:id
    })
  }

  function addTransaction(text){
    if((text.text !=='') && (text.amount !== 0))
    {
      dispatch({
        type:'ADD_TRANSACTION',
        payLoad:text
      })
    }
  }

  return (
  <GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>
    {children}
  </GlobalContext.Provider>
  )
}
