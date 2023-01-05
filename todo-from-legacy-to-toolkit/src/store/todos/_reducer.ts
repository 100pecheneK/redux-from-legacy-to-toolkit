import { createReducer, PayloadAction, PrepareAction } from '@reduxjs/toolkit'
import { TodoType, TodoActionType } from './@types'
import { addTodo, removeTodo, toggleTodo } from './_action-creators'

const initialState: TodoType[] = []
// new reducer v1 + new actions
export const todos = createReducer(initialState, builder => {
  builder
    .addCase(addTodo, (state, action) => {
      state.unshift(action.payload)
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter(todo => todo.id !== action.payload)
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (!todo) return
      todo.complited = !todo.complited
    })
})
// new reducer v2 + new actions (bad fo TS... not work)
// export const todos = createReducer(initialState, {
//   [addTodo.type]: (state, action: PayloadAction<TodoType>) => {
//     state.unshift(action.payload)
//   },
//   [removeTodo.type]: (state, action) => {
//     return state.filter(todo => todo.id !== action.payload)
//   },
//   [toggleTodo.type]: (state, action) => {
//     const todo = state.find(todo => todo.id === action.payload)
//     if (!todo) return
//     todo.complited = !todo.complited
//   },
// })

// old reducer + new actions
// export const todos = (
//   state = initialState,
//   action: TodoActionType
// ): typeof initialState => {
//   switch (action.type) {
//     case addTodo.type:
//       return [action.payload, ...state]
//     case removeTodo.toString():
//       return state.filter(todo => todo.id !== action.payload)
//     case toggleTodo.toString():
//       return state.map(todo =>
//         todo.id === action.payload
//           ? { ...todo, complited: !todo.complited }
//           : todo
//       )
//     default:
//       return state
//   }
// }
