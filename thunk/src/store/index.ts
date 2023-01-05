import { applyMiddleware, compose, createStore } from 'redux'
import { loadState, saveState } from './local-storage'
import { rootReducer } from './root-reducer'
import throttle from 'lodash/throttle'
import thunk from 'redux-thunk'
import { DispatchFunctionType, InitialStateType } from './@types'
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
import { client } from '../api'

export function configureStore() {
  const persistedState = {}
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware<DispatchFunctionType, InitialStateType>(
        thunk.withExtraArgument({ client })
      )
    )
  )
  return store
}

export type RootStore = ReturnType<typeof configureStore>

export type RootState = ReturnType<RootStore['getState']>
// export type AppDispatch = RootStore['dispatch']
