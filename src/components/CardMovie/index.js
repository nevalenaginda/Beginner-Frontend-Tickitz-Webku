import React from "react";

function CardMovie({ id, posterMovie }) {
  return (
    <div key={id} className="card">
      <div className="image-card">
        <img src={posterMovie} alt={posterMovie} />
      </div>
    </div>
  );
}

export default CardMovie;
