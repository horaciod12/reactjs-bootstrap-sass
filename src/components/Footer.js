import React from "react";

import logoFooter from "../assets/imgs/logo-footer.svg";

const Footer = () => {
  return (
    <div className="Container-footer">
      <div className="Footer-1"></div>
      <div className="Footer-2">
        <div className="d-flex align-items-center justify-content-center h-100">
          <img src={logoFooter} className="Logo-footer" alt="Logo" />
          <div className="Text">© All right reserved 2020</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
