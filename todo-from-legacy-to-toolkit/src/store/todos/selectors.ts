import { RootState } from '..'
import { FilterTypes } from '../../containers/Filters'

export const selectAllTodos = (state: RootState) => state.todos
export const selectDoneTodos = (state: RootState) =>
  selectAllTodos(state).filter(todo => todo.complited === true)
export const selectActiveTodos = (state: RootState) =>
  selectAllTodos(state).filter(todo => todo.complited === false)

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
