import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer} id="footerBar">
      <div>
        <h5 style={styles.h5}>Created by Stephen Brown</h5>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    padding: "0.5%",
    backgroundColor: "#000080",
    position: "fixed",
    width: "100%",
    bottom: "0",
  },
  h5: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "1rem",
  },
};
