import { getActionTypes } from '../../@types'
import { JobPositionType } from '../../positions/@types'
import * as ac from '../action-creators'

export type FilterType = string

export type FiltersActionTypes = getActionTypes<typeof ac>
