import { House, SideContainerProps } from '../types'
import { HouseDetails } from './house-details'

export const SideContainer = ({
  showContainer,
  showHouse,
  handleCloseButton
}: SideContainerProps) => {
  if (showContainer) {
    return (
      <div id='side-container' style={{ width: '500px' }}>
        <button type='button' className='close-btn' onClick={handleCloseButton}>
          &times;
        </button>
        <HouseDetails  houseDetails={showHouse} />
      </div>
    )
  }
  return <div id='side-container' style={{ width: '0px' }} />
}
