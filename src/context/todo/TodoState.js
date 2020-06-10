import React, {useReducer} from 'react'
import { TodoContext } from './todoContext'
import todoReducer from './todoReducer'
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types"

export const TodoState = ({children}) => {

    const initialState = {
        todos: [{id: '1', title: 'Title test'}]
    };

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = (title) => {
        dispatch({
            type: ADD_TODO,
            payload: {
                title
            }
        })
    }
    
    const updateTodo = (id, title) => {
        dispatch({
            type: UPDATE_TODO,
            payload: {
                id,
                title
            }
        })
    }
    
    const delTodo = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload: {
                id
            }
        })
    }
    
  
    return <TodoContext.Provider value={ {
        todos: state.todos,
        addTodo,
        updateTodo,
        delTodo
    } }>{ children }</TodoContext.Provider>
}

