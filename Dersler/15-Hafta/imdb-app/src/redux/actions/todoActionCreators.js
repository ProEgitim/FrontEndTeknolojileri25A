import * as todoActionTypes from './todoActionTypes'

export const todoAdd = todo => ({ type: todoActionTypes.TODO_ADD, payload: todo })
export const todoDelete = todo => ({ type: todoActionTypes.TODO_DELETE, payload: todo })
export const todoFilter = todo => ({ type: todoActionTypes.TODO_FILTER, payload: todo })