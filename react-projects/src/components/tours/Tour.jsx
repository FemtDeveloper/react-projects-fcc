import React, { useState } from "react";

const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="price-tour">${price}</h4>
      </div>
      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}{" "}
        <button className="btn-more" onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Show more"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>Not interested</button>
    </div>
  );
};

export default Tour;
