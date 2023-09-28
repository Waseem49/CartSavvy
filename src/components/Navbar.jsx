import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        width: "100%",
        color: "azure",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "95%",
          padding: ".5rem 0",
          fontSize: "25px",
        }}>
        <div>Logo</div>
        <div>
          <Link
            to={"/cart"}
            style={{ textDecoration: "none", color: "inherit" }}>
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
