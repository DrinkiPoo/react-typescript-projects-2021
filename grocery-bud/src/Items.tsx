import { ReactElement } from "react";
import { IItem } from "./App";

export default function Items({
  items,
  removeItem,
  handleEdit,
}: {
  items: IItem[];
  removeItem: (id: string) => void;
  handleEdit: (id: string) => void;
}): ReactElement {
  return (
    <div>
      {items.map((item) => {
        return (
          <p key={item.id}>
            {item.name}
            <button onClick={() => handleEdit(item.id)}>edit</button>
            <button onClick={() => removeItem(item.id)}>delete</button>
          </p>
        );
      })}
    </div>
  );
}
