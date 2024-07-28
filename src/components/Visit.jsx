import React from 'react';

const visitsData = [
  {
    id: 2,
    location: "Department of Electrical Engineering, Graduate School of Engineering, Kyoto University, Japan",
    date: "27th January 2018",
    host: "Prof Masayuki Kimura"
  },
  {
    id: 1,
    location: "Institute of Applied Physics, Abbe Center of Photonics, Friedrich-Schiller-Universitat Jena, Max-Wien-Platz 1, 07743 Jena, Germany",
    date: "11th May 2017",
    host: "Prof. Dr. Thomas PERTSCH"
  }
];

function Visits() {
  return (
    <div className="container mt-5 text-white">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8 ">
          <h4 className="fs-1 mb-4 p-3 border-bottom">Visits</h4>
          {visitsData.map((visit) => (
            <div key={visit.id} className="mb-3">
              <h5 className="">{visit.id}-: {visit.location}</h5>
              <p><strong>Date:</strong> {visit.date}</p>
              <p><strong>Host:</strong> {visit.host}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Visits;
