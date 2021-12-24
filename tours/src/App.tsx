import React, { ReactElement, useEffect, useState } from "react";
import Tours from "./Tours";

const url: string = "https://course-api.com/react-tours-project";

export interface ITours {
  id: number;
  name: string;
  info: string;
  image: string;
  price: number;
}

const App = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tours, setTours] = useState<ITours[]>([]);

  const removeTour = (id: number) => {
    setTours(tours.filter((tour) => tour.id != id));
  };

  const fetchURL = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((tours) => {
        setLoading(false);
        setTours(tours);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchURL();
  }, []);

  if (loading) {
    return <h1>Loading ... </h1>;
  } else if (tours.length === 0) {
    return <button onClick={fetchURL}>Refresh</button>;
  } else {
    return <Tours tours={tours} removeTour={removeTour} />;
  }
};

export default App;
