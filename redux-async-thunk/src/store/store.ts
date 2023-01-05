import {
  combineReducers,
  configureStore,
  createAsyncThunk,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { todosReducer } from '../features/Todos/todos-slice'
import { filterReducer } from '../features/Filters/filter-slice'
import { RootState, AppDispatch, ApiType } from './types'
// import storage from 'redux-persist/lib/storage'
import * as todosApi from '../api/todos'
import {
  // persistReducer,
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
export const api = { todosApi }
// const persistedReducer = persistReducer(
//   {
//     key: 'root',
//     storage,
//   },
//   rootReducer
// )

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // .concat(logger),
  // enhancers: [],
})
export default store
export const persistor = persistStore(store)
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch: () => AppDispatch = useDispatch
