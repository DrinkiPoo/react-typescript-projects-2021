import { FormEvent, ReactElement, useRef, useState } from "react";
import Paragraphs, { length } from "./Paragraphs";

export default function App(): ReactElement {
  const [num, setNum] = useState<number>(0);
  const refContainer = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (refContainer.current !== null) {
      setNum(Number(refContainer.current.value));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputNum">Paragraphs: </label>
        <input
          id="inputNum"
          type="number"
          min={0}
          max={length}
          ref={refContainer}
        />
        <button type="submit">Generate</button>
      </form>
      {num > 0 && <Paragraphs propNum={num} />}
    </div>
  );
}
