import React from "react";
import './scss/app.scss';
import gotMap from './resources/got-map.jpg';
import gotLogo from './resources/got-logo.png';
import houseStarkSigil from './resources/stark-house-sigil.png'

function App() {
  return (
    <div className="map-container">
      <img id="got-map" src={gotMap} alt="map" />
      <div className="map-body">
        <img id="got-logo" src={gotLogo} alt="logo" />
        <div id="house-stark-sigil-container" className="img-container" >
          <a href="/." target="_blank">
            <div className="img-shadow">
              <img src={houseStarkSigil} alt="house-stark-sigil" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
