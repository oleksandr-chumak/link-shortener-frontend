import { AlertType } from '../../components/UI/alert /Alert/alert'
export interface Alert {
  id: string,
  type: AlertType,
  header: string,
  description: string
}