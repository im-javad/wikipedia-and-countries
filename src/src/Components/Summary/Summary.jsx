import React from "react";

function Summary(props) {
  return (
    <div className="col-12 d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src="./Flag_of_Iran.svg.png" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">Iran</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Capital: Tehran</li>
          <li className="list-group-item">Population: 87.92 million (2021)</li>
          <li className="list-group-item">Official language: Persian</li>
        </ul>
      </div>
    </div>
  );
}

export default Summary;
