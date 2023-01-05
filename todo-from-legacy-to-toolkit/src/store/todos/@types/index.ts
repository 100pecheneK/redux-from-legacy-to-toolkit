import { getActionTypes } from '../../@types'
import * as actionCreators from '../_action-creators'
export type TodoType = {
  id: string
  title: string
  complited: boolean
}
export type TodoActionType = getActionTypes<typeof actionCreators>
