import React, { useState } from "react";
import CategorizedMenu from "./CategorizedMenu";
import data from "./data";

// Setting this up because i dont want to hardcode categories
const categories: string[] = [...new Set(data.map((obj) => obj.category))];

export interface IMenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const App = () => {
  const [menu, setMenu] = useState<IMenuItem[]>(data);
  return (
    <div>
      <h1>Our Menu</h1>
      <button onClick={() => setMenu(data)}>All</button>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() =>
            setMenu(data.filter((obj) => obj.category == category))
          }
        >
          {category}
        </button>
      ))}
      <CategorizedMenu menu={menu} />
    </div>
  );
};

export default App;
