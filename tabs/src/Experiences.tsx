import React, { ReactElement, useState } from "react";
import { IData } from "./App";

const Experience = ({
  singleExperience,
}: {
  singleExperience: IData;
}): ReactElement => {
  return (
    <div>
      <h4>{singleExperience.title}</h4>
      <h4>{singleExperience.company}</h4>
      <h4>{singleExperience.dates}</h4>
      <h4>{singleExperience.duties}</h4>
    </div>
  );
};

export default Experience;
