import * as Yup from 'yup'

export const email = Yup
  .string()
  .required('Please enter email')
  .email('Wrong email format')
  .min(5, 'Email must be from 5 characters to 50')
  .max(50, 'Email must be from 5 characters to 50')

export const username = Yup
  .string()
  .required('Please enter username')
  .min(5, 'Username must be from 5 characters to 5')
  .max(20, 'Username must be from 5 characters to 20')

export const password = Yup
  .string()
  .required('Please enter password')
  .min(8, 'Password must be from 8 characters to 50')
  .max(32)
export const confirmPassword = Yup
  .string()
  .required('Please confirm your password')
  .test('passwords-match', 'Password must match', function(value) {
    return this.parent.password === value
  })