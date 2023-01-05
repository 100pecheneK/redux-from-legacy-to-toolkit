import { getActionTypes } from '../../@types'
import * as ac from '../action-creators'

export type JobPositionType = {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export type PositionsActionTypes = getActionTypes<typeof ac>
