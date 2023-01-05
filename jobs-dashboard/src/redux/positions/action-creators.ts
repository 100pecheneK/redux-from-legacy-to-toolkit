import { JobPositionType } from './@types'
import { ADD_POSITIONS } from './types'

export const addPositions = (positions: JobPositionType[]) => ({
  type: ADD_POSITIONS,
  payload: positions,
})
