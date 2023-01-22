import React from "react";
import type { TMenu } from "./types";

export default function MainMenu({ menuItems }: TMenu) {
  return (
    <ul>
      {menuItems.map((item, index) => {
        return <li key={`${item.name}${index}`}>{item.name}</li>;
      })}
    </ul>
  );
}
