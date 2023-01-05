import { UserType } from './@types'
import { ADD_USERS } from './types'

export const addUsers = (users: UserType[]) => ({
  type: ADD_USERS,
  payload: users,
})
