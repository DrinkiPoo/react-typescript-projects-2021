import React, { useState } from "react";
import data from "./data";
import Slider from "./Slider";

export interface IData {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}
const dataLength = data.length;

function App() {
  const [num, setNum] = useState<number>(0);
  const goRight = () =>
    setNum(num === dataLength - 1 ? num + 1 - dataLength : num + 1);
  const goLeft = () => setNum(num === 0 ? num - 1 + dataLength : num - 1);
  return (
    <div>
      <header>
        <h1>/ Reviews</h1>
      </header>

      <button onClick={goRight}>&lt;</button>
      <Slider person={data[num]} />
      <button onClick={goLeft}>&gt;</button>
    </div>
  );
}

export default App;
