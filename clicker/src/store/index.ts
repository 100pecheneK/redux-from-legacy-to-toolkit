import { createStore } from 'redux'

const initialState = 0

export const INCREMENT = 'INCREMENT' as const
export const DECREMENT = 'DECREMENT' as const
export const RESET = 'RESET' as const

export type ActionTypes = typeof INCREMENT | typeof DECREMENT | typeof RESET

export type ActionType = {
  type: ActionTypes
}

const counter = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET:
      return 0
    default:
      return state
  }
}

export const increment = { type: INCREMENT }
export const decrement = { type: DECREMENT }
export const reset = { type: RESET }

export const store = createStore(counter)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
