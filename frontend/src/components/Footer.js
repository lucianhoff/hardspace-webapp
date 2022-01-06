import React from "react"
import '../component-styles/footer.css';
import { Link } from 'react-router-dom';
import { FaTruck } from 'react-icons/fa';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { IoIosHelpBuoy } from 'react-icons/io';
import { HiIdentification } from 'react-icons/hi';
import { GrFacebook } from 'react-icons/gr';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { FaTwitterSquare } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="">
          <FaTruck className="colorIcons" /> Free Delivery
          <BsFillCreditCardFill className="colorIcons"/> Safe Payment
          <IoIosHelpBuoy className="colorIcons"/> 24/7 Help Center
          <HiIdentification className="colorIcons"/> Friendly Services
        </div>

        <div className="">
          <BsTelephoneFill className="colorIcons"/>+54911234568
          <FaEnvelope className="colorIcons"/>contact@hardspace.com
          <MdLocationOn className="colorIcons"/>Address: 6 Bis Rue Meyerbee
        </div>

        <h2>FOLLOW US</h2>

        <div className="">
          <GrFacebook className="colorIcons"/>
          <FaTwitterSquare className="colorIcons"/>
          <ImInstagram className="colorIcons"/>
        </div>

        <div className="footerLinks">
          <Link className="homelink" to="/">Home</Link>
        </div>

        <div className="copyright"><h3>HARDSPACE | &copy; 2021 </h3> </div>

      </footer>
    </>
  )
}
export default Footer