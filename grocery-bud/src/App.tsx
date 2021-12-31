import React, { FormEvent, ReactElement, useState } from "react";
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

  const editItem = (id: string): void => {};
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setItems([
      ...items,
      { name: current, id: new Date().getTime().toString() },
    ]);
    setCurrent("");
  };

  return (
    <div>
      <header>Grocery butt</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {items.length > 0 && <Items propArr={items} deleteItem={deleteItem} />}
      <button onClick={() => setItems([])}>Clear Items</button>
    </div>
  );
}
