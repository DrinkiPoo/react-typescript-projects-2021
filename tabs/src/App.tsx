import React, { useEffect, useState } from "react";
import "./App.css";
import Experiences from "./Experiences";

const url = "https://course-api.com/react-tabs-project";
export interface IData {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

function App() {
  const [data, setData] = useState<IData[]>([]);
  const [num, setNum] = useState<number>(0);

  const fetchURL = (): void => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const objectsSortedByOrder = json.sort(
          (first: IData, second: IData) => second.order - first.order
        );
        const maxOrder = Math.max(...json.map((obj: IData) => obj.order));
        setData(objectsSortedByOrder);
        setNum(maxOrder);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => fetchURL(), []);
  return (
    <div>
      <header>
        <h1>Experience</h1>
      </header>
      {data.map((obj) => (
        <button
          key={obj.id}
          style={{ display: "block" }}
          onClick={() => setNum(obj.order)}
        >
          {obj.company}
        </button>
      ))}
      <Experiences
        singleExperience={data.filter((obj) => obj.order === num)[0]}
      />
    </div>
  );
}

export default App;
