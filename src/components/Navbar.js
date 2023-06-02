import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: "#3C6255",
          color: "black",
          fontFamily: "'Caveat Brush', cursive",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Add box shadow here
        }}
      >
        <div
          style={{ width: "100%", fontSize: "50px" }}
          className="  align-items-center text-center "
          href="/"
        >
          <b style={{}}>MovieMarker</b>
        </div>
      </nav>
    </div>
  );
}
