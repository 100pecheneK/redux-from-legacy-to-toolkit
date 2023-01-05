import { AppThunk } from '../@types'
import { UserType } from './@types'
import { addUsers } from './action-creators'

export const loadUsers =
  (): AppThunk =>
  async (dispatch, _, { client }) => {
    try {
      const data = await client<UserType[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      dispatch(addUsers(data))
    } catch (error) {
      console.error(error)
    }
  }
