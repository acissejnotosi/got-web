import { HouseComponentType } from '../types'
import { DisplayDetailsList } from './display-details-list'
import { DisplayDetailsText } from './display-details-text'

export const HouseDetails = ({ houseDetails }: HouseComponentType) => (
  <div className='side-content'>
    <h1 className='side-content-main-title'>{houseDetails?.name}</h1>
    <div className='side-box'>
      <DisplayDetailsText detail={houseDetails?.region} title='Region' />
      <DisplayDetailsText
        detail={houseDetails?.coatOfArms}
        title='Coat Of Arms'
      />
      <DisplayDetailsText detail={houseDetails?.words} title='Words' />
      <DisplayDetailsList details={houseDetails?.titles} title='Titles' />
      <DisplayDetailsList details={houseDetails?.seats} title='Seats' />
      <DisplayDetailsText detail={houseDetails?.heir} title='Heir' />
      <DisplayDetailsText detail={houseDetails?.founded} title='Founded' />
      <DisplayDetailsList
        details={houseDetails?.ancestralWeapons}
        title='Ancestral Weapons'
      />
    </div>
  </div>
)
