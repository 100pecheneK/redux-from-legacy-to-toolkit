import { useTypedSelector, useTypedDispatch } from '../hooks/useTypedSelector'
import { removeTodo, toggleTodo } from '../store/todos/slices'
import { selectFilteredTodos } from '../store/todos/selectors'
import { Todo } from '../components/Todo'
import { useParams } from 'react-router-dom'
import { FilterParamsType } from './Filters'

export default function Todos() {
  const { filter = 'all' } = useParams<FilterParamsType>()
  const todos = useTypedSelector(state => selectFilteredTodos(state, filter))
  const dispatch = useTypedDispatch()

  function onDelete(id: string) {
    dispatch(removeTodo(id))
  }
  function onToggle(id: string) {
    dispatch(toggleTodo(id))
  }

  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
          title={todo.title}
          complited={todo.complited}
        />
      ))}
    </ul>
  )
}
