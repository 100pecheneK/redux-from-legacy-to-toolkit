import { getActionTypes } from '../../@types'
import * as actionCreators from '../action-creators'
export type TodoType = {
  id: number
  title: string
  complited: boolean
}
export type TodoInitialState = TodoType[]
export type TodoActionType = getActionTypes<typeof actionCreators>
