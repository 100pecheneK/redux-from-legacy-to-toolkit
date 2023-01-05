import joblistReducer, { addPositions } from './sclie'
import * as joblistSelectors from './selectors'
const joblistActions = {
  addPositions,
}

export { joblistReducer, joblistActions, joblistSelectors }
