import React, { FC } from 'react'
import { RouteControllerProps } from './route-controller.types'
import { Protections } from './route-controller.constants'

export const RouteController: FC< RouteControllerProps> = (
  {
    element,
    protection,
    layout,
  },
) => {
  const Protection = protection ? Protections[protection] : null
  const Layout = layout ? layout : null

  const protectedElement = Protection ? <Protection>{element}</Protection> : element;

  const layoutElement = Layout ? <Layout>{protectedElement}</Layout> : protectedElement;
  return (
    <>{layoutElement}</>
  )
}

