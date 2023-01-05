import { getActionTypes } from '../../@types'
import * as actionCreators from '../action-creators'

export type FilterActionTypes = getActionTypes<typeof actionCreators>
export type FilterTypes = 'all' | 'done' | 'active'
