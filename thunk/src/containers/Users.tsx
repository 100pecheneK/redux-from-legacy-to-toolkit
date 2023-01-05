import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTypedDispatch } from '../hooks/useTypedSelector'
import { selectAllUsers } from '../store/users/selectors'
import { loadUsers } from '../store/users/thunk-actions'

export default function Users() {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(loadUsers())
  }, [])
  const users = useSelector(selectAllUsers)
  if (users.length === 0) return null
  return <div>Users: {users.length}</div>
}
