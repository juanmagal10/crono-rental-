import React, { createContext, useReducer, useContext } from "react";
import { useEffect } from "react";
import { images } from "../assets";
import { productsData } from '../assets/products-data/products'
import reducer from "../reducer/reducer";

export const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: [],
    total: 0, 
    amount:0
}


 const AppProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer, initialState)
    const arraySwitcher = (array) => {
        
     }
     
     const clearCart = () => {
         dispatch({type:'CLEAR_CART'})
     }

     const removeItem = (id, cart, arregloFiltrado) => {
         dispatch({ type: 'REMOVE', payload: { id, cart } })
        
     }

     const addItem = (id, array) => {
         dispatch({type:'ADD_ITEM', payload:{id, array}})
     }

    const contextData = images;

     const valor = contextData;
     
     useEffect(() => {
         dispatch({type:'GET_TOTALS'})
     }, [state.cart])

    return (
        <AppContext.Provider value={{
            ...state, clearCart, removeItem, addItem
        }}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider}