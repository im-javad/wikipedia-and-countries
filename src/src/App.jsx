import React, { useEffect, useState } from "react";
import wiki from "wikijs";
import Map from "./Components/Map";
import Information from "./Components/Information";
import Summary from "./Components/Summary";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("iran");
  const [summary, setSummary] = useState("");
  const [info, setInfo] = useState({ capital: 0, papulation: 0, lang: "" });
  const [img, setImg] = useState("");

  useEffect(() => {
    async function fetchData() {
      const page = await wiki().page(selectedCountry);
      const [summary, info, img] = await Promise.all([
        page.summary(),
        page.info(),
        page.mainImage(),
      ]);
      setSummary(summary);
      setInfo(info);
      setImg(img);
    }

    fetchData();
  }, [selectedCountry]);

  function handleSelectedCountry(name) {
    setSelectedCountry(name);
  }

  return (
    <div className="container">
      <div className="row">
        <Map handleSelectedCountry={handleSelectedCountry} />
        <Information info={info} img={img} />
        <Summary summary={summary} />
      </div>
    </div>
  );
}

export default App;
