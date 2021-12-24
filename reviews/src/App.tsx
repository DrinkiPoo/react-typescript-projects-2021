import React, { useState } from "react";
import "./App.css";
import reviews from "./data";
import Display from "./Display";

export interface IPerson {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

function App() {
  const [num, setNum] = useState<number>(0);
  const dataLength: number = reviews.length;
  const modularIncrease = (num: number): number =>
    num === dataLength - 1 ? num + 1 - dataLength : num + 1;
  const modularDecrease = (num: number): number =>
    num === 0 ? num + dataLength - 1 : num - 1;
  const randomUser = (): number => {
    return Math.floor(Math.random() * dataLength);
  };

  return (
    <div>
      <Display person={reviews[num]} />
      <button onClick={() => setNum(modularIncrease(num))}>Next</button>
      <button onClick={() => setNum(modularDecrease(num))}>Previous</button>
      <button onClick={() => setNum(randomUser())}>Surprise Me!</button>
    </div>
  );
}

export default App;
