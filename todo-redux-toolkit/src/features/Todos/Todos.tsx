import { Todo } from '../../components/Todo'
import { useTypedSelector, useTypedDispatch } from '../../store/store'
import { selectFilteredTodos } from './selectors'
import { removeTodo, toggleTodo } from './todos-slice'

export default function Todos() {
  const filter = useTypedSelector(state => state.filters)
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
