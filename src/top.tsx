import React from "react";
import Button from "./Button";

type ButtonInfo = {
  name: string;
  filepath: string;
};

type TopProps = {
  title: string;
  buttons: ButtonInfo[];
};

function capitalizeFirstLetter(val: string) {
  return (
    String(val).charAt(0).toUpperCase() + String(val).slice(1).toLowerCase()
  );
}

export default function Top({ title, buttons }: TopProps) {
  return (
    <header
      style={{
        backgroundColor: "#353535",
        color: "#ffffff",
        textAlign: "center",
        width: "100%",
        top: 0,
        left: 0,
        padding: "20px",
        position: "fixed",
      }}
    >
      <h1>{title.toUpperCase()}</h1>
      {buttons.map((btn) => (
        <Button name={btn.name} link={btn.filepath} key={btn.name} />
      ))}
    </header>
  );
}
