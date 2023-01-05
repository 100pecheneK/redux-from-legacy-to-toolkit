import { RootState } from '..'
import { FilterTypes } from '../filters/@types'

export const selectAllTodos = (state: RootState) => state.todos.reverse()
export const selectDoneTodos = (state: RootState) =>
  state.todos.filter(todo => todo.complited === true)
export const selectActiveTodos = (state: RootState) =>
  state.todos.filter(todo => todo.complited === false)

export const selectFilteredTodos = (state: RootState, filter: FilterTypes) => {
  switch (filter) {
    case 'active':
      return selectActiveTodos(state)
    case 'done':
      return selectDoneTodos(state)
    case 'all':
    default:
      return selectAllTodos(state)
  }
}
