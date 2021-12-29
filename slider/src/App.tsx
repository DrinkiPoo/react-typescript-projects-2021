import React, { useEffect, useState } from "react";
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

// JS gives out negetive module for some reason
// this function will correct that
const moduloDL = (x: number): number =>
  ((x % dataLength) + dataLength) % dataLength;

function App() {
  const [num, setNum] = useState<number>(0);
  const [counting, setCounting] = useState<boolean>(true);

  useEffect(() => {
    const slider = setInterval(() => {
      setNum((prevNum) => moduloDL(prevNum + 1));
    }, 5000);
    return () => clearInterval(slider);
  }, [num]);

  return (
    <div>
      <header>
        <h1>/ Reviews</h1>
      </header>

      <button
        onClick={() => {
          setNum((prevNum) => moduloDL(prevNum + 1));
          setCounting(false);
        }}
      >
        &lt;
      </button>
      <button
        onClick={() => {
          setNum((prevNum) => moduloDL(prevNum - 1));
          setCounting(false);
        }}
      >
        &gt;
      </button>
      <Slider person={data[num]} />
    </div>
  );
}

export default App;
