import {createContext, useContext} from "react"


export const CountContext = createContext({
    count: 0,
    incrementCount: () => {},
    decrementCount: () => {},
})

export const useCount = () => {
    return useContext(CountContext)
}

export const CountProvider = CountContext.Provider