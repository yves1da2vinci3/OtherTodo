
import { ADD_TODO, MODIFY_TODO } from './Actions';

const initialState = {
    todos: []
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case MODIFY_TODO:
            // find Index
           
            return {
                ...state,
                todos: state.todos.map((t,i) => t.id === action.payload.Id ? t = action.payload.data  : t)
            };
        default:
            return state;
    }
}

