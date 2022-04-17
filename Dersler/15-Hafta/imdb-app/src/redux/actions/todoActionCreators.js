import * as todoActionTypes from './todoActionTypes'

const todoAdd = todo => ({ type: todoActionTypes.TODO_ADD, payload: todo })
const todoDelete = todo => ({ type: todoActionTypes.TODO_DELETE, payload: todo })
const todoFilter = todo => ({ type: todoActionTypes.TODO_FILTER, payload: todo })