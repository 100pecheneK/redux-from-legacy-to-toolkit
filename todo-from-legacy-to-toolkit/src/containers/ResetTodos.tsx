import { useTypedDispatch } from '../hooks/useTypedSelector'
import { reserToDefault } from '../store/todos/actions'

export default function ResetTodos() {
  const dispatch = useTypedDispatch()
  function reset() {
    dispatch(reserToDefault())
  }
  return <button onClick={reset}>Reset Todos</button>
}
