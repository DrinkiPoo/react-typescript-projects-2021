import React, { FormEvent, ReactElement, useState } from "react";
import Paragraphs, { lenght } from "./Paragraphs";

function App(): ReactElement {
  const [num, setNum] = useState<number>(0);
  const [numm, setNumm] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setNum(numm);
  };
  return (
    <div>
      <h3>Tired of boring lorem-ipsum?</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputNum">Paragraphs </label>
        <input
          type="number"
          id="inputNum"
          value={numm}
          min={0}
          max={lenght}
          onChange={(e) => setNumm(Number(e.target.value))}
        />
        <button type="submit">Generate</button>
      </form>
      {num > 0 && <Paragraphs numProp={num} />}
    </div>
  );
}

export default App;
