import { RootState } from '../store'

export const selectALlPositions = (state: RootState) => state.positions
export const selectVisiblePositions = (
  state: RootState,
  filters: string[] = []
) => {
  if (filters.length === 0) return state.positions
  return state.positions.filter(pos => {
    const posFilters = [pos.role, pos.level, ...pos.languages, ...pos.tools]
    return filters.every(filter => posFilters.includes(filter))
  })
}
