import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {BsFillSignpostFill, BsFillSignpost2Fill} from "react-icons/bs";

const Nav = () => {
  return (
    <nav style={styles.container} id="navBar">
      <Link to="/" style={styles.links} className="navLink" title="Home">
        <FaHome />
      </Link>
      <Link to="/car" style={styles.links} className="navLink" title="Car">
        <BsFillSignpostFill />
      </Link>
      <Link to="/newCar" style={styles.links} className="navLink" title="New Car">
        <BsFillSignpost2Fill />
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
    height: "50rem",
  },
  links: {
    padding: "1rem",
    textAlign: "center",
    display: "block",
    marginTop: "3rem",
    fontSize: "3rem",
  },
};
