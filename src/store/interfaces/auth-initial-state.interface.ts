import { User } from '../../features'

export interface AuthInitialState{
  user: User | undefined;
  isLoading: boolean;
  error:string | undefined;
}