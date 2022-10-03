import React from "react";

function Characters({ characters = [] }) {
  return (
    <div className="row">
      {characters.map((el, index) => (
        <div key={index} className="col mb-4">
          <div className="card">
            <img
              style={{ minWidth: "200px", height: "270px" }}
              src={el.image}
              alt={el.actor}
            />
            <div className="card-boby" style={{ height: "260px" }}>
              <h5 className="card-title">{el.name}</h5>
              <p>Species: {el.species}</p>
              {el.wizard && <p>Wizard: Yes </p>}
              {el.house && <p>House: {el.house} </p>}
              <p>Birthday: {el.dateOfBirth}</p>
              <p>
                Wand: {el.wand.wood}, {el.wand.core}, {el.wand.length} inches
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
