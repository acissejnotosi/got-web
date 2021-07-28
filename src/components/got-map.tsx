import React, { useEffect, useState } from 'react'
import '../scss/components.scss'
import { useHistory } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import gotMap from '../resources/images/got-map.jpg'
import gotLogo from '../resources/images/got-logo.png'
import { House } from '../types'
import { Sigil } from './sigil'
import { SideContainer } from './side-container'
import { HOUSES } from '../resources/constant'

function GOTMap () {
  const [houseList, setHouseList] = useState<House[]>()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showSideContainer, setShowSideContainer] = useState<boolean>(false)
  const [selectedHouse, setSelectedHouse] = useState<House>()
  const { push } = useHistory()

  const handleSideContainer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShowSideContainer(true)
    setSelectedHouse(
      houseList?.find(house => house.name === e.currentTarget.value)
    )
  }

  const handleCloseSideContainer = () => {
    setShowSideContainer(false)
    setSelectedHouse(undefined)
  }

  const handleError = (error: string) => {
    setErrorMessage(error)
  }

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/houses')
      .then(response => response.json())
      .then(response => setHouseList(response))
      .catch(error => error && handleError(error))
  }, [])

  useEffect(() => {
    if (selectedHouse !== undefined) {
      push(`/${selectedHouse?.name}`)
    } else {
      push(`/`)
    }
  }, [selectedHouse])

  return (
    <div>
      {houseList ? (
        <div className='map-container'>
          <img id='got-map' src={gotMap} alt='map' />
          <div className='map-body'>
            <img id='got-logo' src={gotLogo} alt='logo' />
            {houseList?.map(house => {
              const houseFound = HOUSES.find(h => h.url === house.url)
              if (houseFound) {
                return (
                  <Sigil
                    handleSideContainer={handleSideContainer}
                    houseSigil={houseFound}
                    houseName={house.name}
                  />
                )
              }
              return null
            })}
            <SideContainer
              showContainer={showSideContainer}
              showHouse={selectedHouse}
              handleCloseButton={handleCloseSideContainer}
            />
          </div>
        </div>
      ) : (
        <div id='loader'>
          <Loader type='ThreeDots' color='#F2F2F2' height={100} width={100} />
        </div>
      )}
    </div>
  )
}

export default GOTMap
