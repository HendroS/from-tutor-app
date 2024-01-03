/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext } from "react";

const TotalPriceContex = createContext<{ total: number }>({ total: 0});

const TotalPriceDispatchContext = createContext<any>(null)

const totalPriceReducer = (state:{total:number}, action:{type:string,payload:{total:number}}) => {
    switch (action.type) {
        case "UPDATE":
            state;
            return {
                total: action.payload.total
            }
        default:
            throw Error("Unknown action: " + action.type)
    }
    
}

export const TotalPriceContexProvider = ({children}:{children:React.ReactNode}) => {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

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