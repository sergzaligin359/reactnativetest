import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types";

const initialState = {
    todos: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {
                    id: Date.now().toString(),
                    title: payload.title
                }]
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: [...state.todos.map(todo => {
                    if(todo.id === payload.id){
                        todo.title = title;
                    }
                    return todo;
                })]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter(todo => todo.id !== payload.id)]
            }
        default:
            return state
    }
}