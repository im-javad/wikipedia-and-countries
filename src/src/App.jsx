import React, { useEffect, useState } from "react";
import Map from "./Components/Map";
import Summary from "./Components/Summary";
import Information from "./Components/Information";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("iran");

  function handleSelectedCountry(name) {
    setSelectedCountry(name);
  }

  return (
    <div className="container">
      <div className="row">
        <Map handleSelectedCountry={handleSelectedCountry} />
        <Summary />
        <Information />
      </div>
    </div>
  );
}

export default App;
