import React from "react";

const Header = () => {
  return (
    <header style={styles.header} id="headerBar">
        <h1 style={styles.h1}>Memory Lane</h1>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#000080",
  },
  h1: {
    color: "#FFFFFF",
    fontSize: "3rem",
  },
};
