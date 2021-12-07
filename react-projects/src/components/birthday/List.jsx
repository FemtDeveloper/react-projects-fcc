import React from "react";
import "./list.css";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { name, id, image, age } = person;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
