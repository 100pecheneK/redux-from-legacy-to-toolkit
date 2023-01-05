import { rootReducer } from './root-reducer'
import { configureStore, createAction } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  preloadedState: {
    todos: [{ id: '1', title: 'example', complited: true }],
  },
  // enhancers: [],
})

export type RootStore = typeof store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

// old
// export function configureStore() {
//   const persistedState = loadState()
//   const store = createStore(
//     rootReducer,
//     persistedState,
//     composeEnhancers(applyMiddleware())
//   )
//   store.subscribe(
//     throttle(
//       () =>
//         saveState({
//           todos: store.getState().todos,
//         }),
//       1000
//     )
//   )
//   return store
// }
