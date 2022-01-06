import React from "react"
import '../components-styles/Footer.css';
import {Link} from 'react-router-dom'


const Footer = () => {
  return (   
    <>
    <div>
      <footer>
      <div className="infoIcons">
        <i class="fab FaTruck"></i>
        <i class="fab BsFillCreditCardFill"></i>
        <i class="fab IoIosHelpBuoyr"></i>
        <i class="fab HiIdentification"></i>
        </div>
        <div className="contactInfo">
        <i class="fab BsTelephoneFill">+54911234568</i>
        <i class="fab FaEnvelope">contact@hardspace.com</i>
        <i class="fab MdLocationOn">Address: 6 Bis Rue Meyerbee</i>
        </div>
        <h2>FOLLOW US</h2>
        <div className="socialNetwork">
        <i class="fab GrFacebook"></i>
        <i class="fab FaTwitterSquare"></i>
        <i class="fab ImInstagram"></i>
        </div>
      <div className="footerLinks">
        <Link  className="homelink"to="/">Home</Link>
        </div>
        <div className="copyright"><h3>HARDSPACE | &copy; 2021 </h3> </div>    
      </footer>
    </div>
    </>
)
}
export default Footer