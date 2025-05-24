import React from "react";

function capitalizeFirstLetter(val: string) {
  return (
    String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase()
  );
}

type Props = {
  link: string;
  name: string;
};

export default function Button({ link, name }: Props) {
  return (
    <a href={link} key={name}>
      <button>{capitalizeFirstLetter(name)}</button>
    </a>
  );
}
