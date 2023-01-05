import { toast, ToastContainer } from 'react-toastify'
import { Todo } from '../../components/Todo'
import { useTypedSelector, useTypedDispatch } from '../../store/store'
import { selectFilteredTodos, todosStatus } from './selectors'

import { useLoadTodos } from './hooks'
import { removeTodo, toggleTodo } from './actions'
import { todosSelectors } from './todos-slice'

export default function Todos() {
  useLoadTodos()
  const dispatch = useTypedDispatch()
  const filter = useTypedSelector(state => state.filters.type)
  const allTodos = useTypedSelector(todosSelectors.selectAll)
  const filteredTodos = selectFilteredTodos(allTodos, filter)
  const { isLoading, error } = useTypedSelector(todosStatus)

  function onDelete(id: string) {
    dispatch(removeTodo(id))
  }
  function onToggle(id: string) {
    dispatch(toggleTodo(id))
  }

  return (
    <ul>
      {error && <span>{error}</span>}
      {isLoading && <span>Loading</span>}

      {filteredTodos.map(todo => (
        <Todo
          key={todo.id}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  )
}
