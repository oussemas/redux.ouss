import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "../Constants/actionsTypes";


const initialState = {
    todos: []
}

const reducerTask = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, todos: [...state.todos, action.payload] }

        case DELETE_TASK:
            return { ...state, todos: state.todos.filter(el => el.id !== action.payload) }

        case COMPLETE_TASK:
            return { ...state, todos: state.todos.map(el => el.id === action.payload ? { ...el, isDone: !el.isDone } : el) }

        case EDIT_TASK:
            return { ...state, todos: state.todos.map(el => el.id === action.payload.id ? { ...el, description: action.payload.text } : el) }

        default:
            return state;
    }
}

export default reducerTask