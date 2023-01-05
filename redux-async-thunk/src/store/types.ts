import store, { api } from './store'

export type RootStore = typeof store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type ApiType = typeof api
