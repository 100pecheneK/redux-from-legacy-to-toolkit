import { TodoType } from './@types'
import { ADD_TODOS, SET_LOADING, SET_ERROR, ADD_TODO } from './types'

export const addTodos = (todos: TodoType[]) => ({
  type: ADD_TODOS,
  payload: todos,
})

export const setLoading = (isLoading: boolean) => ({
  type: SET_LOADING,
  payload: isLoading,
})

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
})

export const addTodo = (todo: TodoType) => ({
  type: ADD_TODO,
  payload: todo,
})
