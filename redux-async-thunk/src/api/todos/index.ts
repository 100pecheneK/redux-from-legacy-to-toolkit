import { nanoid } from '@reduxjs/toolkit'
import { TodoType } from '../../features/Todos/types'

const API = 'http://localhost:3001/todos'

export async function loadTodos() {
  const res = await fetch(API)
  const data: TodoType[] = await res.json()
  return data
}

export async function createTodo(title: string) {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, completed: false, id: nanoid() }),
  })
  const data: TodoType = await res.json()
  return data
}

export async function toggleTodo(id: TodoType['id'], fileds: TodoType) {
  const res = await fetch(API + `/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...fileds }),
  })
  const data: TodoType = await res.json()
  return data
}

export async function removeTodo(id: TodoType['id']) {
  const res = await fetch(API + `/${id}`, {
    method: 'DELETE',
  })
  const data = await res.json()
  return id
}
