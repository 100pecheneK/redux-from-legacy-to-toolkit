import { combineReducers } from 'redux'
import { todos } from './todos/reducer'
import { users } from './users/reducer'

export const rootReducer = combineReducers({ todos, users })
