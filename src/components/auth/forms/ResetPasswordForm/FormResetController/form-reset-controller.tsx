import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { checkToken } from '../../../../../services'
import { ALERT, FORMS } from './form-reset-controller.constants'
import { Forms } from './form-reset-controller.types'
import { useAlert } from '../../../../../hooks/use-alert'

export const FormResetController = () => {
  const [searchParams] = useSearchParams();
  const [currentForm,setCurrentForm] = useState<Forms>();
  const {alert} = useAlert()
  const navigate = useNavigate()
  const fetchParam = async () => {
    const token = searchParams.get('token');
    if (!token){
      setCurrentForm('resetRequest')
      return;
    }
    try {
      await checkToken(token)
      setCurrentForm('reset')
    }catch (e){
      alert(ALERT.LINK_EXPIRED)
      navigate('../reset')
      setCurrentForm('resetRequest')
    }
  }
  useEffect(  () => {
    fetchParam()
  }, [searchParams])
  const CurrentFormComponent = currentForm ? FORMS[currentForm] : null;

  return (
    <>
      {CurrentFormComponent && <CurrentFormComponent/>}
    </>
  )
}

