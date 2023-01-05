import Filters from './containers/Filters'
import ResetTodos from './containers/ResetTodos'
import TodoForm from './containers/TodoForm'
import Todos from './containers/Todos'

export default function App() {
  return (
    <div>
      <ResetTodos />
      <Filters />
      <TodoForm />
      <Todos />
    </div>
  )
}
