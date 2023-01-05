import { RootState } from '..'
import { FilterTypes } from '../filters/@types'

export const selectAllTodos = (state: RootState) => state.todos.todos
export const selectIsLoading = (state: RootState) => state.todos.isLoading
export const selectError = (state: RootState) => state.todos.error
