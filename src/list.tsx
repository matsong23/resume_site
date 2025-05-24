import React from "react";

export default function List({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <>
      {title !== "" && <h3>{title}</h3>}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
