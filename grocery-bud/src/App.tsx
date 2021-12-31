import React, { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import Items from "./Items";

export interface IItem {
  name: string;
  id: string;
}

export default function App(): ReactElement {
  const [items, setItems] = useState<IItem[]>([]);
  const [current, setCurrent] = useState<string>("");

  const deleteItem = (id: string): void => {
    const newSet = items.filter((item) => item.id != id);
    setItems(newSet);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setItems([
      ...items,
      { name: current, id: new Date().getTime().toString() },
    ]);
    setCurrent("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCurrent(e.target.value);
  };

  return (
    <div>
      <header>Grocery butt</header>
      <form onSubmit={handleSubmit}>
        <input type="text" value={current} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {items.length > 0 && (
        <Items
          propArr={items}
          deleteItem={deleteItem}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <button onClick={() => setItems([])}>Clear Items</button>
    </div>
  );
}
