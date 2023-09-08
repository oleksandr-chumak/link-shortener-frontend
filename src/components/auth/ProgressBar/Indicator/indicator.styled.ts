import styled from 'styled-components'
import { INDICATOR_COLORS, SEPARATOR_COLORS } from './indicator.constants'
import { IndicatorPositionProps } from './indicator.types'


export const IndicatorWrapper = styled.div<IndicatorPositionProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  transition: all .3s ease 0s;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid ${({ $position }) => INDICATOR_COLORS[$position]};
  color: ${({ $position }) => INDICATOR_COLORS[$position]};
`

export const IndicatorHeader = styled.p`
  position: absolute;
  font-size: 12px;
  transform: translate(-50%, 0);
  left: 50%;
  bottom: -17px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const Separator = styled.div<IndicatorPositionProps>`
  height: 2px;
  width: 100px;
  background-color: ${({ $position }) => SEPARATOR_COLORS[$position]}
`