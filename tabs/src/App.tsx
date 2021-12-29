import React, { useEffect, useState } from "react";
import Experience from "./Experience";

const url = "https://course-api.com/react-tabs-project";

export interface IData {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string;
  company: string;
}

export default function App() {
  const [data, setData] = useState<IData[]>([]);
  const [id, setId] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const fetchURL = async (): Promise<void> => {
    setLoading(true);
    const response = await fetch(url);
    const jobs = await response.json();
    setData(jobs);
    setId(jobs[0].id);
    setLoading(false);
  };

  useEffect((): void => {
    fetchURL();
  }, []);

  if (loading) {
    return <h1>Loading Data ...</h1>;
  } else {
    return (
      <div>
        <h2>Experiences</h2>
        {data.map((obj) => {
          return (
            <button
              key={obj.id}
              style={{ display: "block" }}
              onClick={() => setId(obj.id)}
            >
              {obj.company}
            </button>
          );
        })}
        <Experience propObj={data.filter((obj) => obj.id === id)[0]} />
      </div>
    );
  }
}
