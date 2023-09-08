import React, { FC } from 'react'
import { IndicatorWrapper, IndicatorHeader, Separator } from './indicator.styled'
import { IndicatorProps, Position } from './indicator.types'
import { NUMBERS_OF_INDICATORS } from '../progress-bar.constants'
import { useFormContext } from '../../../../features'

export const Indicator:FC<IndicatorProps>= ({position,header,icon}) => {
  const {currentPage, goToPage} = useFormContext()
  const Icon = icon;
  const getRelativePosition = (elementPosition: number): Position => {
    if (elementPosition < currentPage) return 'passed'
    if (elementPosition === currentPage) return 'current'
    return 'next'
  }
  const relativePosition = getRelativePosition(position);
  return (
    <>
      <IndicatorWrapper $position={relativePosition}>
        <Icon/>
        <IndicatorHeader onClick={() => goToPage(position)} >{header}</IndicatorHeader>
      </IndicatorWrapper>
      {position !== NUMBERS_OF_INDICATORS && <Separator $position={relativePosition}/>}
    </>
  )
}

