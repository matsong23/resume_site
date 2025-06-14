import React from "react";
import type { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => (
  <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
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
      <div style={{ fontWeight: "bold", fontSize: 24, marginBottom: 16 }}>
        Page
      </div>
      <div
        style={{
          display: "flex",
          gap: 12,
          marginBottom: 16,
          justifyContent: "center",
        }}
      >
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </header>
    <main>{children}</main>
  </div>
);

export default Page;
