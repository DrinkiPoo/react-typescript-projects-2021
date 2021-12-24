import React from "react";
import { IPerson } from "./App";

const Display = ({ person }: { person: IPerson }) => {
  return (
    <div>
      <img
        src={person.image}
        alt={person.name}
        style={{ width: "125px", height: "150px" }}
      />
      <h2>{person.name}</h2>
      <p>{person.job}</p>
      <p>{person.text}</p>
    </div>
  );
};

export default Display;
