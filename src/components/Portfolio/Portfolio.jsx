import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="card-web">
          <img src={Sidebar} alt="" />
          <h4>Name:Car-auto-parts website.</h4>
        <p>● User Interface Developed With ReactJs
          ● Minimal Design With Tailwind CSS
          ● Prevent Unauthorized Access By JSON Web Token
          ● Routing Functionality with React-Router
          Used Techs: ReactJs, NodeJs, MongoDB, Firebase, Stripe, Admin Panel
          </p>
          <a href="https://github.com/Nasirdiu/Assientment-12-client-site"  target='blank'>Client</a>
          <a href="https://github.com/Nasirdiu/Assientment--12-server-site"  target='blank'>Server</a> 
          <a href="https://car-auto-parts-e0b2d.web.app/" target='blank'>Live</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-web">
          <img src={Ecommerce} alt="" />
          <h4>Name:Electronics Warehouse website:</h4>
        <p>● Product Management Functionality
            ● Developed UI with ReactJs & Bootstrap
            ● Used NodeJs to perform CRUD operations
            Used Techs: ReactJs, NodeJs, MongoDB, Bootstrap
          </p>
          <a href="https://github.com/Nasirdiu/Assientment--11-client-site"  target='blank'>Client</a>
          <a href="https://github.com/Nasirdiu/Assientment--11-server-site"  target='blank'>Server</a> 
          <a href="https://electronics-warehouse-56938.web.app/"  target='blank'>Live</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-web">
          <img src={MusicApp} alt="" />
          <h4>Name:wedding-venues website.</h4>
        <p>● Beautiful and Clean Design.

           Used Techs: Html Css Bootstrap Netlify.
          </p>
          <a href="https://github.com/Nasirdiu/Assientment--3"  target='blank'>Client</a>
          
          <a href="https://wedding-venues.netlify.app/"  target='blank'>Live</a>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="card-web">
          <img src={HOC} alt="" />
          <h4>Name:luxury-living website.</h4>
        <p>● Beautiful and Clean Design
            ● Developed UI with ReactJs & Tailwind
            ● Firebase Authentication For Users
            Used Techs: ReactJs, Tailwind, Firebase
          </p>
          <a href="https://github.com/Nasirdiu/Project-dream-client"  target='blank'>Client</a>
          
          <a href="https://luxury-living-4fa76.web.app/"  target='blank'>Live</a>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
