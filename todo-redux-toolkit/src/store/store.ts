import { combineReducers, configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { todosReducer } from '../features/Todos/todos-slice'
import { filterReducer } from '../features/Filters/filter-slice'
import { RootState, AppDispatch } from './types'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
})

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer
)
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  preloadedState: {
    todos: [{ id: '1', title: 'example', complited: true }],
  },
  // enhancers: [],
})
export const persistor = persistStore(store)
export default store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch: () => AppDispatch = useDispatch
