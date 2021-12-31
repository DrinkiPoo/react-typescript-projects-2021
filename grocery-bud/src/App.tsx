import { ChangeEvent, FormEvent, ReactElement, useRef, useState } from "react";
import Items from "./Items";

export interface IItem {
  id: string;
  name: string;
}

const defaultItem: IItem[] = [
  {
    id: "12345678998",
    name: "Shiner Bock 12pack",
  },
  {
    id: "974658156546",
    name: "Extra Large Condoms",
  },
];

export default function App(): ReactElement {
  // states
  const [items, setItems] = useState<IItem[]>(defaultItem);
  const [temp, setTemp] = useState<string>("");
  const [editID, setEditID] = useState<string>("");

  // refs
  const refContainer = useRef<HTMLInputElement>(null);

  // handler functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTemp(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (editID) {
      const tempArr = items;
      const index = tempArr.findIndex((obj) => obj.id === editID);
      tempArr[index].name = temp;
      setItems(tempArr);
      setEditID("");
      setTemp("");
    } else {
      setItems([...items, { id: new Date().getTime().toString(), name: temp }]);
      setTemp("");
    }
  };

  const removeItem = (id: string): void => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleEdit = (id: string): void => {
    setEditID(id);
    setTemp(items.filter((item) => item.id === id)[0].name);
    if (refContainer.current !== null) {
      refContainer.current.focus();
    }
  };

  return (
    <div>
      <header>Grocery Bud!</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={temp}
          ref={refContainer}
          onChange={handleChange}
        />
        <button type="submit">{editID ? "Edit" : "Submit"}</button>
      </form>
      {items.length > 0 && (
        <Items items={items} removeItem={removeItem} handleEdit={handleEdit} />
      )}
      <button onClick={() => setItems([])}>Clear All Items</button>
    </div>
  );
}
