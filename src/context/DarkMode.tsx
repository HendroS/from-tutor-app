/* eslint-disable react/prop-types */
import { ContextType, ReactElement, ReactNode, SetStateAction, createContext, useState } from "react";
import { ContextDarkModeType } from "../@types/darkMode";

// type DarkModeType = {
//     isDarkMode: true | fals

const DarkModeContext = createContext<ContextDarkModeType>({
    isDark: true,
    toggleDark:()=>{}
})
type Iprops = {
    children: ReactNode;
} 

const DarkModeContextProvider = ({ children }:Iprops) => {
    const [isDark, setIsDark] = useState(true);
    const toggleDark = (): void => {
        setIsDark(!isDark);
  };
    return (
        <DarkModeContext.Provider value={{ isDark, toggleDark }} >
            {children}
      </DarkModeContext.Provider>
  )
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider
