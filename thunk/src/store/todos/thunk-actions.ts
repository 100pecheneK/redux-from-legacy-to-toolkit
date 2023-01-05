import { AppThunk } from '../@types'
import { TodoType } from './@types'
import { addTodo, addTodos, setError, setLoading } from './action-creators'

export const loadTodos =
  (): AppThunk =>
  async (dispatch, _, { client }) => {
    try {
      dispatch(setLoading(true))
      const data = await client<TodoType[]>(
        'https://jsonplaceholder.typicode.com/todos'
      )
      dispatch(addTodos(data))
    } catch (error) {
      dispatch(setError('error loading todos'))
      console.error(error)
    } finally {
      dispatch(setLoading(false))
    }
  }

export const createTodo =
  (title: string): AppThunk =>
  async (disapatch, _, { client }) => {
    const todo = { title, id: Date.now() }
    try {
      const data = await client<TodoType>(
        'https://jsonplaceholder.typicode.com/todos',
        {
          body: todo,
        }
      )
      disapatch(addTodo(data))
    } catch (error) {
      disapatch(setError('error add todo'))
    }
  }
