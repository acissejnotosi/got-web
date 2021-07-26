import { SideContainerProps } from "../types";

export const SideContainer = ({ showContainer, showHouse, handleCloseButton }: SideContainerProps) =>
{
  console.log('entrou');
  console.log(showContainer);
  if (showContainer)
  {
    return <div id="side-container" style={{ width: "500px" }} >
      <button type="button" className="close-btn" onClick={handleCloseButton}>&times;</button>

    </div>
  }
  return <div id="side-container" style={{ width: "0px" }} />
}