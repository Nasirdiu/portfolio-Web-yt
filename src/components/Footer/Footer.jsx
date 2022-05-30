import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Nasir.joypuhat@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
         <a href="https://www.facebook.com/nasir369" target='blank'> <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/nasirdiu" target='blank'><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
