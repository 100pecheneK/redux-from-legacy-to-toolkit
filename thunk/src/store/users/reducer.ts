import { UserType, UserActionType } from './@types'

const initialState: UserType[] = []

export const users = (state = initialState, action: UserActionType) => {
  switch (action.type) {
    case 'ADD_USERS':
      return action.payload
    default:
      return state
  }
}
