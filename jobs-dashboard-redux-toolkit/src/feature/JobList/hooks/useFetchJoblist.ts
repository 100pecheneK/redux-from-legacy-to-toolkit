import { useEffect } from 'react'
import { joblistActions } from '..'
import { useTypedDispatch } from '../../../store/hooks'
import data from '../../../mock/data.json'
export const useFetchJoblist = () => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(joblistActions.addPositions(data))
  }, [])
}
