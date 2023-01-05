import { useTypedDispatch, useTypedSelector } from './hooks/useTypedSelector'
import { decrement, increment, reset } from './store'

export default function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}
const Counter = () => {
  const count = useTypedSelector(state => state)
  const dispatch = useTypedDispatch()
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement)}>-</button>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(reset)}>C</button>
    </div>
  )
}
