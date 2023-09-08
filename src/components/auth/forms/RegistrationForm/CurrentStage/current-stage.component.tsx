import { STAGES } from './current-stage.constants'
import { ProgressBar } from '../../../ProgressBar'
import { useFormContext } from '../../../../../features'


export const CurrentStage = () => {
  const { currentPage } = useFormContext()
  const Stage = STAGES[currentPage]
  return (
    <>
      <ProgressBar />
      <Stage />
    </>
  )
}

