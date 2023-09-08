import React, { FC, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { FormContext } from './form-context'
import { initialValues, validateInitialValues } from './initial-values'
import { Children } from '../../../../../types/children.interface'
import { RegisterFormValues } from '../../../../../features'

const values = { current: { ...initialValues } }
const validate = { current: { ...validateInitialValues } }
export const FormProvider: FC<Children> = ({ children }) => {
  // state
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [serverError, setError] = useState<string | undefined>(undefined)
  // --state
  // hooks
  const location = useLocation()
  const navigate = useNavigate()
  // ---hooks
  // action with navigation
  const navigateTo = (page: number) => {
    navigate(`../../register/${page}`)
  }
  const switchToNextPage = () => {
    navigateTo(currentPage + 1)
  }
  const goToPage = (page: number) => {
    if (page > currentPage || page === currentPage) {
      return
    }
    navigateTo(page)
  }
  const parseQuery = () => {
    const parsedPathname = location.pathname.split('')
    const query = Number(parsedPathname[parsedPathname.length - 1])
    if (Number.isNaN(query)) {
      navigateTo(1)
    }
    return query
  }
  // ---action with navigation
  useEffect(() => {
    return () => {
      // reset values
      validate.current = validateInitialValues
      values.current = initialValues
    }
  }, [])
  useEffect(() => {
    const page = parseQuery()
    const access = checkPageAccess(page)
    if (!access) {
      navigateTo(1)
      return
    }
    setCurrentPage(page)
  }, [location])
  // action with error
  const clearServerError = () => {
    setError(undefined)
  }
  const setServerError = (error: string) => {
    setError(error)
  }
  // ---action with error
  // action with values
  const updateValues = (newValues: Partial<RegisterFormValues>) => {
    values.current = { ...values.current, ...newValues }
  }
  const updateValidate = (newValidate: Record<number, boolean>) => {
    validate.current = { ...validate.current, ...newValidate }
  }
  // ---action with values
  // action with access
  const checkPageAccess = (page: number) => {
    const validateValues = Object.values(validate.current)
    const access = validateValues
      .filter((_, index) => index < page - 1).includes(false)
    return !access
  }
  // --action with access
  return (
    <FormContext.Provider value={{
      values,
      validate,
      updateValues,
      updateValidate,
      currentPage,
      switchToNextPage,
      serverError,
      setServerError,
      clearServerError,
      goToPage,
    }
    }>
      {children}
    </FormContext.Provider>
  )
}

