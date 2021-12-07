import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="tours">
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default Tours;
