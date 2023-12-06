import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          position: "absolute",
          width: "100%",
          height: "20em",
          background: "#000",
          top: "216.5em",
        }}
        class="page-footer font-small cyan darken-3"
      >
        <div class="footer_content"></div>

        <div
          style={{ marginTop: "14em" }}
          class="footer-copyright text-center py-3"
        >
          © 2020 Copyright:
          <a href="/"> Freelance.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
