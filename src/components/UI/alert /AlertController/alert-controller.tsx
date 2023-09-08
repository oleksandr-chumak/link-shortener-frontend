import React from 'react'
import { Alert } from '../Alert/alert'
import { useAppSelector } from '../../../../store'

const STEP = 73

export const AlertController = () => {
  const { alerts } = useAppSelector(state => state.alert)
  return (
    <>
      {alerts.map((alertProps, index) => <Alert
        key={alertProps.id} {...alertProps}
        style={{
          bottom: `${20 + index * STEP}px`,
        }}
      />)}
    </>
  )
}

