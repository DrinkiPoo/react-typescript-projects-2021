import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { IItem } from "./App";

export default function Items({
  propArr,
  deleteItem,
  handleChange,
  handleSubmit,
}: {
  propArr: IItem[];
  deleteItem: (id: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}): ReactElement {
  return (
    <div>
      {propArr.map((obj) => {
        return (
          <p key={obj.id}>
            {obj.name}{" "}
            <Options
              id={obj.id}
              deleteItem={deleteItem}
              handleChange={handleChange}
              handleChange={handleSubmit}
            />
          </p>
        );
      })}
    </div>
  );
}

function Options({
  id,
  deleteItem,
  handleChange,
  handleSubmit,
}: {
  id: string;
  deleteItem: (id: string) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}): ReactElement {
  const [editing, setEditing] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setEditing(true)} style={{ display: "inline" }}>
        edit
      </button>
      <button onClick={() => deleteItem(id)} style={{ display: "inline" }}>
        delete
      </button>
      {editing && (
        <span>
          <form>
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>edit</button>
          </form>
        </span>
      )}
    </div>
  );
}
