/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react";

const TotalPriceContex = createContext(null);

const TotalPriceDispatchContext = createContext(null)

const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                total: action.payload.total
            }
        default:
            throw Error("Unknown action: "+action.type)
    }
    
}

export const TotalPriceContexProvider = ({children}) => {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer,{total:0});

    return (
        <TotalPriceContex.Provider value={totalPrice}>
            <TotalPriceDispatchContext.Provider value={dispatch}>
                {children}
            </TotalPriceDispatchContext.Provider>
      </TotalPriceContex.Provider>
  )
}

export function useTotalPrice(){
    return useContext(TotalPriceContex)
    
}

export function useTotalPriceDispatch() {
    return useContext(TotalPriceDispatchContext)
}