import { getActionTypes } from '../../@types'
import * as actionCreators from '../action-creators'
export type UserType = {
  id: number
  username: string
}
export type UserInitialState = UserType[]
export type UserActionType = getActionTypes<typeof actionCreators>
