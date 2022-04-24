import initialState from '../initialState'
import * as todoActionTypes from '../actions/todoActionTypes'

const todoReducer = (state = initialState, action) => {
    var newTodos

    switch(action.type) {
        case todoActionTypes.TODO_ADD:
            // newTodos Array 
            newTodos = [...state.todos, action.payload]
            return { todos: newTodos, filteredTodos: newTodos }
        case todoActionTypes.TODO_DELETE:
            // action type delete olduğunda kendisi hariç olanları listele
            // ve tekrar listeyi kendisi hariç olacak şekilde recreate et
            newTodos = state.todos.filter(todo => todo !== action.payload)
            return { todos: newTodos, filteredTodos: newTodos }
        case todoActionTypes.TODO_FILTER:
            let stateTodos = state.todos.map(x=> { return x.toLowerCase() })
            let lowerCase = action.payload.toLowerCase()

            let a = stateTodos.filter(todo => todo.includes(lowerCase))
            let b = state.todos.filter(todo => todo.includes(action.payload))

            state.filteredTodos = JSON.stringify(a) == JSON.stringify(b.map(x=> {return x.toLowerCase()})) ? b : a
            //state.todos.filter(todo => todo.includes(action.payload))
            return { todos: state.todos, filteredTodos: state.filteredTodos }

        default:
            return state
    }
}

export default todoReducer