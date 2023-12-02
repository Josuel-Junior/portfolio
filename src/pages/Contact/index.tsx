import { useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'

export const Contact: React.FC = () => {

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()

  useEffect(() => {
    setIndicatorCurrent(4)
  })


  return (
    <div>
      <h2>Contact page</h2>
      <h2>{indicatorCurrent}</h2>
    </div>
  )
}