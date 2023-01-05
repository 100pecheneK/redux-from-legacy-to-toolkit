import store from '.'

export type RootStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
