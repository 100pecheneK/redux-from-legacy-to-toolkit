import { useState } from 'react'
import { useTypedDispatch } from '../../store/store'
import { addTodo } from './todos-slice'

export default function TodoForm() {
  const dispatch = useTypedDispatch()
  const [title, setTitle] = useState('')
  function onTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)
  }
  function onSubmit(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      onAdd(title)
      setTitle('')
    }
  }
  function onAdd(title: string) {
    dispatch(addTodo(title))
  }
  return (
    <input
      type='text'
      value={title}
      onChange={onTitleChange}
      onKeyDown={onSubmit}
    />
  )
}
