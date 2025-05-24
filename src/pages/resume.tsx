import React from "react";
import Top from "../top";
import List from "../list";

export default function Resume() {
  return (
    <>
      <Top
        title="Gunnar Matson"
        buttons={[
          { name: "home", filepath: "./" },
          { name: "projects", filepath: "./projects" },
          { name: "current", filepath: "./current" },
        ]}
      />

      <p>gmatson2023@gmail.com</p>
      <div className="college-info">
        <h2>Michigan Technological University</h2>
        <p>Expected Graduation: Spring 2027 | 2nd year</p>
        <p>Major: Computer Science | Minor: Statistics</p>
        <p>GPA: 3.77 | Department GPA: 3.92</p>
      </div>
      <div className="course-lang">
        <div className="courses">
          <h2>Academic Experience</h2>
          <List
            title="Introduction to Programming I and II Jan 2023 – Dec 2023"
            items={[
              "Newest JDK used",
              "Generics, inheritance, files, trees, sorting, etc",
              "Working in partner pairs using paired programming during the weekly lab",
            ]}
          />
          <List
            title="DAta Structures Jan 2024 - Apr 2024"
            items={[
              "JDK 8 used",
              "Creating, understanding, and debugging graphs, hashmaps, trees, sorting, etc",
            ]}
          />
          <List
            title="Programming at HW/SW Interface Aug 2024 - Dec 2024"
            items={[
              "Learned to program in MIPS using Mars",
              "Programming in C to read files and making programs that rely on many header files",
            ]}
          />
          <List
            title="Intro to Database Aug 2024 – Dec 2024"
            items={[
              "Learned how to plan out a website using UML diagrams",
              "Create tables, procedures, and functions in MYSQL workbench",
              "Create a website using HTML and PHP that uses a database",
            ]}
          />
          <List
            title="Statistical Methods Aug 2024 – Dec 2024"
            items={[
              "Use normal and T distributions given data to make predictions",
              "Find the line of best fit, r^2, and unbiased R^2 given data to make predictions",
              "Construction one way and two way ANOVA tables on given data",
            ]}
          />
        </div>
        <div className="lang-tool">
          <h2>Languages</h2>
          <List
            title=""
            items={[
              "Java",
              "C",
              "MySQL",
              "JavaScript",
              "TypeScript",
              "GraphQL",
            ]}
          />
          <h2>Tools</h2>
          <List
            title=""
            items={[
              "GitHub",
              "VSCode",
              "Cursor",
              "Eclipse",
              "IntelliJ",
              "MySQL Workbench",
            ]}
          />
        </div>
      </div>
    </>
  );
}
