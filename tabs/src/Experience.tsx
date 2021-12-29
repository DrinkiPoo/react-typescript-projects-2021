import React, { ReactElement } from "react";
import { IData } from "./App";

export default function Experience({
  propObj,
}: {
  propObj: IData;
}): ReactElement {
  return (
    <div>
      <h4>{propObj.title}</h4>
      <p>{propObj.dates}</p>
      <p>{propObj.company}</p>
      <p>{propObj.duties}</p>
    </div>
  );
}
