import { createContext } from "react";
import { images } from "../assets";

export const DataContext = createContext()

export const DataContextProvider = (props) => {
    const arraySwitcher = (array) => {
        
    }
    const contextData = images;

    const valor = contextData;

    return (
        <DataContext.Provider value={valor}>{props.children }</DataContext.Provider>
    )
}