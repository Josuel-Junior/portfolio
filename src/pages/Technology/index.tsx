import { useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'

export const Technology: React.FC = () => {

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()
  useEffect(() => {
    setIndicatorCurrent(2)
  }, [])
  return (
    <div>

      <h2>Technology page</h2>
      <h2>{indicatorCurrent}</h2>
    </div>
  )
}