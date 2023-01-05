import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types'

export const addTodo = (title: string) => ({
  type: ADD_TODO,
  payload: title,
})

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
})
