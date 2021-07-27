import { HouseComponentType } from '../types'

export const HouseDetails = ({ houseDetails }: HouseComponentType) => (
  <div className='side-content'>
    <h1>{houseDetails?.name}</h1>
    <div className='side-box'>
      <h2>Region</h2>
      <p>{houseDetails?.region}</p>
      <h2>Coat Of Arms</h2>
      <p>{houseDetails?.coatOfArms}</p>
      <h2>Words</h2>
      <p>{houseDetails?.words}</p>
      <h2>Titles</h2>
      <ul>
        {houseDetails?.titles.map(title => (
          <li>{title}</li>
        ))}
      </ul>
      <h2>Seats</h2>
      <ul>
        {houseDetails?.seats.map(seat => (
          <li>{seat}</li>
        ))}
      </ul>
      <h2>Heir</h2>
      <p>{houseDetails?.heir}</p>
      <h2>Founded</h2>
      <p>{houseDetails?.founded}</p>
      <h2>Ancestral Weapons</h2>
      <p>{houseDetails?.ancestralWeapons}</p>
    </div>
  </div>
)
