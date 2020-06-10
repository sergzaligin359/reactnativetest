import React, {useReducer} from 'react'
import { ScreenContext } from './screenContext'
import screenReducer from './screenReducer'

export default ({ children }) => {
    
    const initialState = {
        todoId: null
    };

    const [state, dispatch] = useReducer(screenReducer, initialState)

    return(
        <ScreenContext.Provider value={{}}>{ children }</ScreenContext.Provider>
    )
}