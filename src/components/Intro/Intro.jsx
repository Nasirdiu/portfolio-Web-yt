import React, { useContext } from 'react';
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import humble from '../../img/humble.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatinDiv from '../FloatinDiv/FloatinDiv';
import { themeContext } from '../../Context';
import { motion } from "framer-motion";
import { Link } from 'react-scroll/modules';
const Intro = () => {
    // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div className="Intro" id="Intro">
        {/* left name side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span className='banner-me'>Nasir Uddin</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          {/* social icons */}
          <div className="i-icons">
            <a href="https://github.com/nasirdiu" target='blank'><img src={github} alt="" /></a>
           <a href="https://www.linkedin.com/in/nasir369/" target='blank'> <img src={linkedin} alt="" /></a>
           <a href="https://www.instagram.com/nasiruddincse/" target='blank'> <img src={instagram} alt="" /></a>
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
          <img src={boy} alt="" />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={glassesimoji}
            alt=""
          />
  
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatinDiv img={crown} text1="Web" text2="Developer" />
          </motion.div>
  
          {/* animation */}
          <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          >
            {/* floatinDiv mein change hy dark mode ka */}
            <FloatinDiv img={humble} text1="React Font-End" text2="Developer" />
          </motion.div>
  
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    );
};

export default Intro;