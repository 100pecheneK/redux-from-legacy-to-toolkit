import { RootState } from '../../store/types'
import { FilterTypes } from '../Filters/types'
import { TodoType } from './types'

export const selectAllTodos = (todos: TodoType[]) => [...todos].reverse()
export const selectTodo = (state: RootState, id: TodoType['id']) =>
  state.todos.entities[id]
export const selectDoneTodos = (todos: TodoType[]) =>
  todos.filter(todo => todo.completed === true)
export const selectActiveTodos = (todos: TodoType[]) =>
  todos.filter(todo => todo.completed === false)

export const todosStatus = (state: RootState) => ({
  isLoading: state.todos.loading,
  error: state.todos.error,
})

export const selectFilteredTodos = (todos: TodoType[], filter: FilterTypes) => {
  switch (filter) {
    case 'active':
      return selectActiveTodos(todos)
    case 'done':
      return selectDoneTodos(todos)
    case 'all':
    default:
      return selectAllTodos(todos)
  }
}
