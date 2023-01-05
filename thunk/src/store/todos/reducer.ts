import { TodoType, TodoActionType } from './@types'

type InitialTodoState = {
  todos: TodoType[]
  isLoading: boolean
  error: string
}
const initialState: InitialTodoState = {
  todos: [],
  isLoading: false,
  error: '',
}

export const todos = (state = initialState, action: TodoActionType) => {
  switch (action.type) {
    case 'todos/ADD_TODOS':
      return {
        ...state,
        todos: action.payload,
      }
    case 'todos/SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
        error: '',
      }
    case 'todos/SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'todos/ADD_TODO':
      return {
        ...state,
        todos: {
          ...action.payload,
          ...state.todos,
        },
      }
    default:
      return state
  }
}
