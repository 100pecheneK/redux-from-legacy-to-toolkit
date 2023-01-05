import { createAction, nanoid, PrepareAction } from '@reduxjs/toolkit'
import { TodoType } from './@types'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types'

export const addTodo = createAction(ADD_TODO, (title: string) => ({
  payload: { title, id: nanoid(), complited: false },
}))

export const removeTodo = createAction<string, typeof REMOVE_TODO>(REMOVE_TODO)

export const toggleTodo = createAction<string, typeof TOGGLE_TODO>(TOGGLE_TODO)
