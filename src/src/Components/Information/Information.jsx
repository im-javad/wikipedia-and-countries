import React from "react";

function Summary({ info, img }) {
  return (
    <div className="col-12 d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{info.commonName}</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital: {info.capital}</li>
          <li className="list-group-item">
            Population: {info.populationEstimate}
          </li>
          <li className="list-group-item">
            languages: {info.officialLanguages}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Summary;
