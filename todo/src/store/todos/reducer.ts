import { TodoType, TodoActionType } from './@types'

const initialState: TodoType[] = []

export const todos = (state = initialState, action: TodoActionType) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: Date.now(), title: action.payload, complited: false },
      ]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload)
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, complited: !todo.complited }
          : todo
      )
    default:
      return state
  }
}
