import { useState } from 'react'
import { toast } from 'react-toastify'
import { useTypedDispatch } from '../../store/store'
import { createTodo } from './actions'

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
    if (!title) return
    dispatch(createTodo(title))
      .unwrap()
      .then(() => {
        toast('Created!')
      })
      .catch(() => {
        toast('Error creating!')
      })
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
