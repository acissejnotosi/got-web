import { SigilProps } from "../types";

export const Sigil = ({
  handleSideContainer,
  houseSigil,
  houseName,
}: SigilProps) => (
  <div className="sigil-container">

     <button
      aria-label="Sigil button"
      type="button"
      className="button-sigil"
      value={houseName}
      onClick={(e) => handleSideContainer(e)}
      style={{
        backgroundImage: `url(${houseSigil?.image})`,
        top: houseSigil?.position.top,
        left: houseSigil?.position.left,
      }}
    /> 
    <span
      className="house-name"
      style={{
        top: houseSigil?.position.top,
        left: houseSigil?.position.left,
      }}
    >
      {houseName}
    </span>
  </div>
);
