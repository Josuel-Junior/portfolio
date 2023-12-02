import { UseIndicatorNavBar } from '../../shared/contexts'
import { useEffect } from 'react'
export const Projects: React.FC = () => {

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()

  useEffect(() => {
    setIndicatorCurrent(3)
  })
  return (
    <div>
      <h2>Projects page</h2>
      <h2>{indicatorCurrent}</h2>
    </div>
  )
}