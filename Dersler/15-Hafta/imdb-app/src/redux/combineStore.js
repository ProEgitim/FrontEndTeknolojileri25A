import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todoReducers'

const reducers = combineReducers({
    todoReducer
})

export default combineStore = () => {
    return createStore(reducers)
}