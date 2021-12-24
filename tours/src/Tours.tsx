import React, { useState } from "react";
import { ITours } from "./App";

const Tours = ({
  tours,
  removeTour,
}: {
  tours: ITours[];
  removeTour: (id: number) => void;
}) => {
  const [lessInfo, setLessInfo] = useState<boolean>(true);

  return (
    <div>
      <h1>Our Tours</h1>
      <ul>
        {tours.map((tour) => {
          return (
            <li key={tour.id}>
              <img src={tour.image} alt={tour.name} />
              <p>{tour.name}</p>
              <p>$ {tour.price}</p>
              <p>
                {lessInfo
                  ? tour.info.substring(0, 200).concat("...")
                  : tour.info}
                <button onClick={() => setLessInfo(!lessInfo)}>
                  {lessInfo ? "Read More" : "Read less"}
                </button>
              </p>
              <button onClick={() => removeTour(tour.id)}>
                Not Interested
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tours;
