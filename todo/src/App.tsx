import Filters from './containers/Filters'
import TodoForm from './containers/TodoForm'
import Todos from './containers/Todos'

export default function App() {
  return (
    <div>
      <Filters />
      <TodoForm />
      <Todos />
    </div>
  )
}
