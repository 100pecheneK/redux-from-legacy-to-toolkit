import { JobPositionType, PositionsActionTypes } from './@types'

export const positionsReducer = (
  state: JobPositionType[] = [],
  action: PositionsActionTypes
) => {
  switch (action.type) {
    case 'ADD_POSITIONS':
      return action.payload
    default:
      return state
  }
}
