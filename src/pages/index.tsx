import React from "react";
import Top from "../top";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#3C6E71",
        color: "#ffffff",
        lineHeight: 2,
        fontFamily: "Arial, sans-serif",
        paddingTop: 150,
      }}
    >
      <Top
        title="about me"
        buttons={[
          { name: "resume", filepath: "./resume" },
          { name: "projects", filepath: "./projects" },
          { name: "current", filepath: "./current" },
        ]}
      />
      <div className="info">
        <p>
          My name is Gunnar Matson. I am 20 years old. I was raised in Houghton,
          Michigan for most of my life.
        </p>
        <p>
          I am a second year Computer Science major and statistics minor at
          Michigan Technological University.
        </p>
        <p>
          I have been programming since my senior year in high school. I have
          always preformed the highest in science and math.
        </p>
      </div>
      <div className="contact-info">
        <a href="https://app.joinhandshake.com/profiles/sz789y" target="_blank">
          Handshake
        </a>
        <a href="https://github.com/matsong23" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/gunnarmatson/" target="_blank">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
