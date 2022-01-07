import React from "react";
import "../component-styles/footer.css";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoIosHelpBuoy } from "react-icons/io";
import { HiIdentification } from "react-icons/hi";
import { GrFacebook } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="orderFooter">
          <div className="flex">
            <FaTruck className="colorIcons" />{" "}
            <div className="column">
              <p>FREE DELIVERY</p> <p>For all orders over $120</p>
            </div>
          </div>
          <div className="flex">
            <BsFillCreditCardFill className="colorIcons" />{" "}
            <div className="column">
              <p>SAFE PAYMENT</p> <p>If goods have problems</p>
            </div>
          </div>
          <div className="flex">
            <IoIosHelpBuoy className="colorIcons" />{" "}
            <div className="column">
              <p>HELP CENTER</p> <p>24/7 Customer Support</p>
            </div>
          </div>
          <div className="flex">
            <HiIdentification className="colorIcons" />{" "}
            <div className="column">
              <p>FRIENDLY SERVICES</p> <p>30 day satisfaction</p>
            </div>
          </div>
        </div>

        <div className="orderData">
          <div className="contactInfo">
           <div> <BsTelephoneFill className="colorIcons" /></div>
            <p>+54911234568</p>
          </div>
          <div className="contactInfo">
            <FaEnvelope className="colorIcons" />
            <p>contact@hardspace.com</p>
          </div>
          <div className="contactInfo">
            <MdLocationOn className="colorIcons" />
            <p>Address: 6 Bis Rue Meyerbee</p>
          </div>
        </div>

        <div className="orderSocial">
          <a href="http://www.facebook.com">
            <div className="hover">
              <GrFacebook className="colorIcons" />
            </div>
          </a>
          <a href="http://www.instagram.com">
            <div className="hover">
              {" "}
              <FaTwitterSquare className="colorIcons" />
            </div>
          </a>
          <a href="http://www.twitter.com">
            <div className="hover">
              <ImInstagram className="colorIcons" />
            </div>
          </a>
        </div>

        <div className="footerLinks">
          <Link className="homelink" to="/">
            Home
          </Link>
        </div>

        <div className="copyright">
          <h3>HARDSPACE | &copy; 2021 </h3> <p>Developed by Team F - Mindhub</p>{" "}
        </div>
      </footer>
    </>
  );
};
export default Footer;
