import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from '../style/theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AlertController } from '../components/UI/alert /AlertController/alert-controller'

import GlobalFonts from '../style/stylesheet/global-fonts'
import { RouteController, routes } from '../router'
import { fetchUserData, useAppDispatch, useAppSelector } from '../store'

export const Providers = () => {
  const { isLoading } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchUserData())
  }, [])
  return (
    <>
      {!isLoading &&
        <ThemeProvider theme={Theme}>
          <AlertController />
          <BrowserRouter>
            <Routes>
              {routes.map(({ routeProps, ...props }, index) => (
                <Route
                  {...routeProps}
                  key={index}
                  element={<RouteController {...props} />}
                />
              ))}
            </Routes>
          </BrowserRouter>
          <GlobalFonts />
        </ThemeProvider>
      }
    </>
  )
}

