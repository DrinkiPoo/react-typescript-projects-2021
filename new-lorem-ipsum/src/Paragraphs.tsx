import { ReactElement } from "react";
import data from "./data";

export const length = data.length;

export default function Paragraphs({
  propNum,
}: {
  propNum: number;
}): ReactElement {
  return (
    <div>
      {data.slice(0, propNum).map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </div>
  );
}
