import { FC } from 'react'
import { ResetRequestForm } from '../ResetRequestForm/reset-request-form'
import { Forms } from './form-reset-controller.types'
import { ResetFormComponent } from '../ResetForm/reset-form.component'
import { AlertType } from '../../../../UI/alert /Alert/alert'

export const FORMS: Record<Forms, FC | typeof  ResetRequestForm> = {
  reset: ResetFormComponent,
  resetRequest:  ResetRequestForm
}

export const ALERT = {
  LINK_EXPIRED : {
    type: 'error' as AlertType,
    header: 'Expired Reset Link',
    description: 'The reset link has expired. Please send a new one.'
  }
};
