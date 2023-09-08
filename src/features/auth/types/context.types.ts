import { RegisterFormValues } from './form-values.types'

export interface IFormContext {
  values: { current: RegisterFormValues };
  validate: { current: Record<number, boolean> };
  updateValues: (values: Partial<RegisterFormValues>) => void;
  updateValidate: (newValidate: Record<number, boolean>) => void;
  currentPage: number;
  switchToNextPage: () => void;
  serverError: string | undefined;
  clearServerError: () => void;
  setServerError: (error: string) => void;
  goToPage: (page: number) => void;
}