import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TodoActionType, TodoInitialState } from '../todos/@types'
import { UserActionType, UserInitialState } from '../users/@types'
import * as api from '../../api'

// action-creator infer types
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

// action-creator infer types
export type getActionTypes<T extends { [key: string]: any }> = ReturnType<
  InferValueTypes<T>
>

// action types from action-creators
export type ActionTypes = UserActionType | TodoActionType
// initial state from reducer
export type InitialStateType = UserInitialState | TodoInitialState
// thunk.withExtraArguments(...ExtraThunkArg)
export type ExtraThunkArg = typeof api
// AppThunk for think-actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  InitialStateType,
  ExtraThunkArg,
  ActionTypes
>

// thunk dispath + redux despatch
export type DispatchFunctionType = ThunkDispatch<
  InitialStateType,
  undefined,
  ActionTypes
>
