import { useTypedDispatch } from '../../store/store'
import { reset } from './reset-action'

export default function Reset() {
  const dispatch = useTypedDispatch()
  function _reset() {
    dispatch(reset())
  }
  return <button onClick={_reset}>Reset Todos</button>
}
