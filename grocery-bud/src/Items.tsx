import { ReactElement } from "react";
import { IItem } from "./App";

export default function Items({
  propArr,
  deleteItem,
}: {
  propArr: IItem[];
  deleteItem: (id: string) => void;
}): ReactElement {
  return (
    <div>
      {propArr.map((obj) => {
        return (
          <p key={obj.id}>
            {obj.name} <Options id={obj.id} deleteItem={deleteItem} />
          </p>
        );
      })}
    </div>
  );
}

function Options({
  id,
  deleteItem,
}: {
  id: string;
  deleteItem: (id: string) => void;
}): ReactElement {
  return (
    <div>
      <button style={{ display: "inline" }}>edit</button>
      <button onClick={() => deleteItem(id)} style={{ display: "inline" }}>
        delete
      </button>
    </div>
  );
}
