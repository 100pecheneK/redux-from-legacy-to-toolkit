import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useTypedDispatch } from '../../store/store'
import { loadTodos } from './actions'

export function useLoadTodos() {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    const promise = dispatch(loadTodos())
    promise.unwrap().catch(err => toast(err))
    return () => {
      promise.abort()
    }
  }, [dispatch])
}
