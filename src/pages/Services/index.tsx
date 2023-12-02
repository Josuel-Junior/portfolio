import { useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'

export const Services: React.FC = () => {

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()

  useEffect(()=>{
    setIndicatorCurrent(1)
  },[])
  return (
    <div>
      <h2>Services page</h2>
      <h2>{indicatorCurrent}</h2>
    </div>
  )
}