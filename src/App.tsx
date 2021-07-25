import React from "react";
import './scss/app.scss';
/* import gotMap from './resources/got-map.jpg';
import gotLogo from './resources/got-logo.png'; */
import starkHouseSigil from './resources/stark-house-sigil.png'

function App() {
  return (
    <div className="map-container" id="map-container">
      {/*   <img id="got-map" src={gotMap} alt="map" />
      <img id="got-logo" src={gotLogo} alt="logo" />
 */}
      <a href="/." target="_blank">
        <div className="img-box">
          <img id="stark-house-sigil" src={starkHouseSigil} alt="stark-house-sigil" />
        </div>
      </a>

    </div>
  );
}

export default App;
