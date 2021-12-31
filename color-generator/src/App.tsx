// functionality not complete
// only accpets one of HTML's 140 color names like red, blue, hotpink etc
// does not accept hex/rgb/hsl etc (yet!)
// not sure if i need to install @types/color-convert
// need to break down this app into managable components

import React, { ChangeEvent, FormEvent, useState } from "react";
import convert from "color-convert";
import { RGB, HSL, HEX } from "color-convert/conversions";

const defaultColor: HEX = "#d63031";

function App() {
  const [inputData, setInputData] = useState<any>("");
  const [colors, setColors] = useState<HSL[]>([]);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      const hsl = convert.keyword.hsl(inputData);
      const arr: HSL[] = [hsl];
      const up: number = 100 - hsl[2];
      const down: number = hsl[2];

      for (let i = 1; i <= 10; i++) {
        arr.unshift([hsl[0], hsl[1], down + (i * up) / 10]);
      }
      for (let i = 1; i <= 10; i++) {
        arr.push([hsl[0], hsl[1], down - (i * down) / 10]);
      }
      setColors(arr);
    } catch (error) {
      setError(true);
    }
    setInputData("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    setInputData(e.target.value);
  };
  return (
    <div className="container-fluid">
      <section className="mt-5 mb-5 text-center">
        <h4>Color Generator</h4>
        <form className="input-group" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            value={inputData}
          />
          <button className="ml-3 btn btn-primary" type="submit">
            Generate Colors
          </button>
        </form>
      </section>
      <section className="row">
        {colors.map((color, index) => {
          const hex = convert.hsl.hex(color);
          const fontColor = index > 10 ? "white" : "black";
          return (
            <div
              onClick={() => navigator.clipboard.writeText(hex)}
              className="col"
              key={index}
              style={{ backgroundColor: `#${hex}` }}
            >
              <p style={{ color: fontColor }}>{hex}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
