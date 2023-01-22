import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { reset } from '../Reset/reset-action'
import { TodoType } from './types'

const initialState: TodoType[] = []

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: {
			reducer: (state, action: PayloadAction<TodoType>) => {
				state.unshift(action.payload)
			},
			prepare: (title: string) => ({
				payload: { title, id: nanoid(), complited: false },
			}),
		},
		removeTodo: (state, action) => {
			return state.filter(todo => todo.id !== action.payload)
		},
		toggleTodo: (state, action) => {
			const todo = state.find(todo => todo.id === action.payload)
			if (!todo) return
			todo.complited = !todo.complited
		},
	},
	extraReducers: builder => {
		builder.addCase(reset, () => {
			return []
		})
	},
})
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export const todosReducer = todoSlice.reducer
