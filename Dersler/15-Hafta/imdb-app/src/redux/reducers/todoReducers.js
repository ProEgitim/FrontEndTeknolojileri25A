import initialState from '../initialState'
import * as todoActionTypes from '../actions/todoActionTypes'

export default todoReducer = (state = initialState, action) => {
    var newTodos;

    switch(action.type) {
        case todoActionTypes.TODO_ADD:
            newTodos = [...state.todos, action.payload]
            return { todos: newTodos, filteredTodos: newTodos }
        case todoActionTypes.TODO_DELETE:
            newTodos = state.todos.filter(todo => todo !== action.payload)
            return { todos: newTodos, filteredTodos: newTodos }
        case todoActionTypes.TODO_FILTER:
            state.filteredTodos = state.todos.filter(todo => todo.includes(action.payload))
            return { todos: state.todos, filteredTodos: state.filteredTodos }
    
        default:
            return state
    }
}