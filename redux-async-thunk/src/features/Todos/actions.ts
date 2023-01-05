import { createAppAsyncThunk } from '../../store/createAppAsyncThunk'
import { RootState } from '../../store/types'
import { selectTodo } from './selectors'
import { TodoType } from './types'

export const createTodo = createAppAsyncThunk(
  'todos/create-todo',
  async (title: string, { rejectWithValue, extra: { todosApi } }) => {
    try {
      return await todosApi.createTodo(title)
    } catch (error) {
      return rejectWithValue('Falied to create Todo')
    }
  }
)

export const loadTodos = createAppAsyncThunk(
  'todos/load-todos',
  async (_, { rejectWithValue, extra: { todosApi } }) => {
    try {
      return await todosApi.loadTodos()
    } catch (error) {
      return rejectWithValue('Failed to fetch all todos')
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const state = <RootState>getState()
      const { loading } = state.todos
      if (loading) {
        return false
      }
    },
  }
)

export const toggleTodo = createAppAsyncThunk(
  'todos/toggle-todo',
  async (
    id: TodoType['id'],
    { getState, rejectWithValue, extra: { todosApi } }
  ) => {
    try {
      const todo = selectTodo(getState(), id)
      if (!todo) throw new Error('Unknown todo id')

      return await todosApi.toggleTodo(id, {
        ...todo,
        completed: !todo.completed,
      })
    } catch (error) {
      console.error(error)
      return rejectWithValue('Failed to toggle todo with id ' + id)
    }
  }
)

export const removeTodo = createAppAsyncThunk(
  'todos/remove-todo',
  async (id: TodoType['id'], { rejectWithValue, extra: { todosApi } }) => {
    try {
      return await todosApi.removeTodo(id)
    } catch (error) {
      return rejectWithValue('Failed to remove todo with id ' + id)
    }
  }
)
