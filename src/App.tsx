import React, { MouseEventHandler, useEffect, useState } from "react";
import "./scss/app.scss";
import gotMap from "./resources/got-map.jpg";
import gotLogo from "./resources/got-logo.png";
import houseAlgoodSigil from "./resources/house-algood.png";
import { House, HouseSigil } from "./types";
import { Sigil } from "./components/sigil";
import { SideContainer } from "./components/side-container";

const HOUSES: HouseSigil[] = [
  {
    url: "https://www.anapioficeandfire.com/api/houses/1",
    position: {
      top: "800px",
      left: "400px",
    },
    image: houseAlgoodSigil,
  },
];

function App() {
  const [houseList, setHouseList] = useState<House[]>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showSideContainer, setShowSideContainer] = useState<boolean>(false);
  const [selectedHouse, setSelectedHouse] = useState<House>();

  const handleSideContainer = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setShowSideContainer(true);
    setSelectedHouse(
      houseList?.find((house) => house.name === e.currentTarget.value)
    );
  };

  const handleCloseSideContainer = () => {
    setShowSideContainer(false);
  };

  const handleError = (error: string) => {
    setErrorMessage(error);
  };

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/houses")
      .then((response) => response.json())
      .then((response) => setHouseList(response))
      .catch((error) => error && handleError(error));
  }, []);

  return (
    <div>
      {errorMessage ? (
        <p className="error"> {errorMessage} </p>
      ) : (
        <div className="map-container">
          <img id="got-map" src={gotMap} alt="map" />
          <div className="map-body">
            <img id="got-logo" src={gotLogo} alt="logo" />
            {houseList?.map((house) => {
              const houseFound = HOUSES.find((h) => h.url === house.url);
              if (houseFound) {
                return (
                  <Sigil
                    handleSideContainer={handleSideContainer}
                    houseSigil={houseFound}
                    houseName={house.name}
                  />
                );
              }
              return null;
            })}
            <SideContainer
              showContainer={showSideContainer}
              showHouse={selectedHouse}
              handleCloseButton={handleCloseSideContainer}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
