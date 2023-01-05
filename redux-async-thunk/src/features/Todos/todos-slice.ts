import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit'
import { RootState } from '../../store/types'
import { reset } from '../Reset/reset-action'
import { createTodo, loadTodos, toggleTodo, removeTodo } from './actions'
import { TodoType } from './types'

type TodoInitialState = typeof todoSlice.getInitialState

const initialState = {
  loading: false,
  error: '',
}
const todosAdapter = createEntityAdapter<TodoType>({
  selectId: todo => todo.id,
})

export const todoSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTodo.fulfilled, (state, action) => {
        todosAdapter.addOne(state, action.payload)
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        todosAdapter.addMany(state, action.payload)
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload
        todosAdapter.updateOne(state, {
          id: updatedTodo.id,
          changes: { completed: updatedTodo.completed },
        })
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        todosAdapter.removeOne(state, action.payload)
      })
      .addCase(loadTodos.pending, state => {
        state.loading = true
        state.error = ''
      })
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (
          state,
          action: PayloadAction<
            string | undefined,
            never,
            never,
            { message: string }
          >
        ) => {
          state.loading = false
          state.error = action.payload || action.error.message
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.loading = false
        }
      )
  },
})
export const todosReducer = todoSlice.reducer
export const todosSelectors = todosAdapter.getSelectors<RootState>(
  state => state.todos
)
