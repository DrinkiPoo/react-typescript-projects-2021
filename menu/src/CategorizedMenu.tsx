import React from "react";
import { IMenuItem } from "./App";
const CategorizedMenu = ({ menu }: { menu: IMenuItem[] }) => {
  return (
    <div>
      {menu.map((item) => {
        return (
          <div key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              style={{ height: "125px", width: "125px" }}
            />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategorizedMenu;
