import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./types"

export const addTodo = (title) => {
    dispatch({
        type: ADD_TODO,
        payload: {
            title
        }
    })
}

export const updateTodo = (id, title) => {
    dispatch({
        type: UPDATE_TODO,
        payload: {
            id,
            title
        }
    })
}

export const deleteTodo = (id) => {
    dispatch({
        type: DELETE_TODO,
        payload: {
            id
        }
    })
}