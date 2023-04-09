import React from "react";
import ImageMapper from "react-image-mapper";
import MapImg from "./map.png";
import CountriesCoord from "./CountriesCoord.json";

function Map({ handleSelectedCountry }) {
  return (
    <div className="col-12 d-flex justify-content-center">
      <ImageMapper
        src={MapImg}
        map={CountriesCoord}
        onClick={(e) => handleSelectedCountry(e.name)}
      />
    </div>
  );
}

export default Map;
