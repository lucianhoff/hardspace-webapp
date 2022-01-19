import React from "react";
import "../component-styles/footer.css";
import { Link } from "react-router-dom";
import { FaTruck } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoIosHelpBuoy } from "react-icons/io";
import { GrFacebook } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {

  // year
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="relative footerBk bg-blue-900 mt-4 ">
        <div className="bg-blue-900 w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 lg:px-2">
          <div className="bg-black-500 h-32">
            <div className="delivery">
              <div className="deliveryIcon"><FaTruck /></div>
              <div className="deliveryText">
                <p className="textBold">FREE DELIVERY</p>
                <p>For orders over $120</p>
              </div>
            </div>
          </div>
          <div className="bg-black-500 h-32">
            <div className="delivery">
              <div className="deliveryIcon"><BsFillCreditCardFill /></div>
              <div className="deliveryText">
                <p className="textBold">SAFE PAYMENT</p>
                <p>If goods have problems</p>
              </div>
            </div>
          </div>
          <div className="bg-black-500 h-32">
            <div className="delivery">
              <div className="deliveryIcon"><IoIosHelpBuoy /></div>
              <div className="deliveryText">
                <p className="textBold">HELP CENTER</p>
                <p>24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container footerColor bg-blue-900 mx-auto px-4 pt-5">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                HardSpace
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Hardware Store
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <Link
                  className="bg-white p-1 text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  to="/"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  className="bg-white p-1 text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  to="/"
                >
                  <i className="fab fa-facebook-square"></i>
                </Link>
                <Link
                  className="bg-white p-1 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  to="/"
                >
                  <i className="fab fa-dribbble"></i>
                </Link>
                <Link
                  className="bg-white p-1 text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  to="/"
                >
                  <i className="fab fa-github"></i>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    CATEGORIES
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/products"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Keyboards
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/products"
                      >
                        Headphones
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/products"
                      >
                        Monitors
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/products"
                      >
                        GPU
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        to="/"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Store
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/products"
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">{year}</span>
                <p
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Developed by HardSpace
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
