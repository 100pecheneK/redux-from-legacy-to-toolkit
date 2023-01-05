import { createStore } from 'redux'
import { rootReducer } from './root-reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => any
  }
}

export const store = createStore(
  rootReducer,
  {
    positions: [],
    filters: [],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
