import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {RiAddCircleFill} from "react-icons/ri"

const Nav = () => {
  return (
    <nav style={styles.container} id="navBar">
      <Link to="/" className="navLink" title="Home">
        <FaHome />
      </Link>
      <Link to="/newCar" className="navLink" title="New Car">
        <RiAddCircleFill />
      </Link>
    </nav>
  );
};

export default Nav;



const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    backgroundColor: "#778899",
    height: "60rem",
  },
};
