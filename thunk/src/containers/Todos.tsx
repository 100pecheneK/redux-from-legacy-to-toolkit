import { useTypedSelector, useTypedDispatch } from '../hooks/useTypedSelector'
import React, { useEffect, useState } from 'react'
import { createTodo, loadTodos } from '../store/todos/thunk-actions'
import {
  selectAllTodos,
  selectIsLoading,
  selectError,
} from '../store/todos/selectors'

export default function Todos() {
  const todos = useTypedSelector(selectAllTodos)
  const dispatch = useTypedDispatch()
  const isLoading = useTypedSelector(selectIsLoading)
  const error = useTypedSelector(selectError)
  const [value, setValue] = useState('')
  useEffect(() => {
    dispatch(loadTodos())
  }, [])
  function onAdd(e: React.KeyboardEvent) {
    if (e.key === 'enter') {
      dispatch(createTodo(value))
    }
  }

  return (
    <>
      {isLoading && <span>loading</span>}
      {error && <span>{error}</span>}
      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={onAdd}
      />
      <pre>{JSON.stringify(todos, null, 4)}</pre>
    </>
  )
}
