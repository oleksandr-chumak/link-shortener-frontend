import { Alert } from '../interfaces'

export type AlertWithoutId = Omit<Alert, 'id'>