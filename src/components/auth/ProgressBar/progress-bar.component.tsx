import { Wrapper } from './progress-bar.styled'
import { Indicator } from './Indicator/indicator.component'
import { INDICATORS, NUMBERS_OF_INDICATORS } from './progress-bar.constants'


export const ProgressBar = () => {
  const generateIndicators = () => {
    const indicators = []
    for (let i = 1; i <= NUMBERS_OF_INDICATORS; i++) {
      indicators.push(<Indicator position={i} {...INDICATORS[i]} key={`indicator-${i}`} />)
    }
    return indicators
  }
  return (
    <Wrapper>
      {generateIndicators()}
    </Wrapper>
  )
}

