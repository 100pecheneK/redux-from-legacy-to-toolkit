import { applyMiddleware, compose, createStore } from 'redux'
import { loadState, saveState } from './local-storage'
import { rootReducer } from './root-reducer'
import throttle from 'lodash/throttle'
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore() {
  const persistedState = loadState()
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware())
  )
  store.subscribe(
    throttle(
      () =>
        saveState({
          todos: store.getState().todos,
        }),
      1000
    )
  )
  return store
}

export type RootStore = ReturnType<typeof configureStore>

export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = RootStore['dispatch']
