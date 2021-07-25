import React, { useEffect, useState } from "react";
import './scss/app.scss';
import gotMap from './resources/got-map.jpg';
import gotLogo from './resources/got-logo.png';
import houseStarkSigil from './resources/house-stark-sigil.png';
import houseAlgoodSigil from './resources/house-algood.png';
import { HouseList } from "./types";

function App() {
  const [houseList, setHouseList] = useState<HouseList[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const openSideNav = () => {

  }

  const handleError = (errorMessage: string) => {
    setErrorMessage(errorMessage);
  }

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/houses')
      .then(response => response.json())
      .then(response => setHouseList(response))
      .catch(error => error && handleError(error))
    return () => {

    }
  }, []);

  return (
    <div>
      {errorMessage ? (
        <p className="error"> {errorMessage} </p>
      ) :
        <div className="map-container">
          <img id="got-map" src={gotMap} alt="map" />
          <div className="map-body">
            <img id="got-logo" src={gotLogo} alt="logo" />
            <div id="house-stark-sigil-container" className="img-container" >
              <div className="img-shadow">
                <input type="image" src={houseStarkSigil} alt="house-stark-sigil" onClick={openSideNav} />
              </div>
            </div>
            <div id="house-algood-sigil-container" className="img-container" >
              <div className="img-shadow">
                <input type="image" src={houseAlgoodSigil} alt="house-algood-sigil" onClick={openSideNav} />
              </div>
            </div>
            <div id="side-container">
            </div>
          </div>
        </div>}
    </div>
  );
}

export default App;
