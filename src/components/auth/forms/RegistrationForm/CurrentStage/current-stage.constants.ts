import { FC } from 'react'
import { SecurityStage, UserIdentificationStage } from './stages'

export const STAGES: Record<number, FC> = {
  1: UserIdentificationStage,
  2: SecurityStage,
}
