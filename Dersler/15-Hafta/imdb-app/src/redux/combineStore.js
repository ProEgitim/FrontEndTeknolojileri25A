import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todoReducers'

const reducers = combineReducers({
    // userReducers,
    todoReducer
})

const combineStore = () => {
    return createStore(reducers)
}

export default combineStore