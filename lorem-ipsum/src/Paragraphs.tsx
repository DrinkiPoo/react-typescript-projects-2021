import React, { ReactElement, useState } from "react";
import data from "./data";

export const lenght = data.length;
export default function Paragraphs({
  numProp,
}: {
  numProp: number;
}): ReactElement {
  const [lorem, setLorem] = useState<string[]>(data.slice(0, numProp));
  return (
    <div>
      {lorem.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}
