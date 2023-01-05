import Filters from './features/Filters/Filter'
import Reset from './features/Reset/Reset'
import TodoForm from './features/Todos/TodoForm'
import Todos from './features/Todos/Todos'

export default function App() {
  return (
    <div>
      <Reset />
      <Filters />
      <TodoForm />
      <Todos />
    </div>
  )
}
