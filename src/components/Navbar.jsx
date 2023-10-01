import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../context/ProductContext";

const Navbar = () => {
  const { state } = useContext(Mycontext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        width: "100%",
        color: "azure",
        marginBottom: "2rem",
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
            Cart:{state.cartlength}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
