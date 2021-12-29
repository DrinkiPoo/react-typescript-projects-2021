import React, { ReactElement } from "react";
import { IData } from "./App";

const picStyle = {
  height: "150px",
  width: "150px",
  border: "6px blue solid",
  borderRadius: "150px",
};

const Slider = ({ person }: { person: IData }): ReactElement => {
  return (
    <div>
      <img src={person.image} alt={person.name} style={picStyle} />
      <h4>{person.name}</h4>
      <p>{person.title}</p>
      <p>{person.quote}</p>
    </div>
  );
};

export default Slider;
