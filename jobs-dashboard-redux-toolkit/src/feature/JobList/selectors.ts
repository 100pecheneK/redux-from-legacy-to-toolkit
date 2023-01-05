import { RootState } from '../../store/types'

export const selectALlPositions = (state: RootState) => state.joblist
export const selectVisiblePositions = (
  state: RootState,
  filters: string[] = []
) => {
  if (filters.length === 0) return state.joblist
  return state.joblist.filter(job => {
    const posFilters = [job.role, job.level, ...job.languages, ...job.tools]
    return filters.every(filter => posFilters.includes(filter))
  })
}
