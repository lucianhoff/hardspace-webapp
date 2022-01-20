import React from "react";
import {Link} from 'react-router-dom'
import Carousel from "../components/Slider";


const Home = () => {
  return (
    <>
      <div className=" pt-7 flex flex-col lg:flex-row">
        <div
          className="w-full h-80 lg:h-auto flex flex-col justify-between p-6 bg-orange-400 rounded-lg lg:w-6/12 lg:ml-2"
          // className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 lg:mb-2 bg-purple-400 rounded-lg mt-7 lg:h-auto lg:mt-0 "
          style={{
            backgroundImage:
              "url(./assets/headphone.png)",
            backgroundSize: "40%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "85%",
          }}
        >
          <div className="">
            <h3 className="font-bold text-white text-2xl ">
              Panasonic 
              <br />
              Lightweight
            </h3>
          </div>
          <div className="w-48 lg:mt-6">
            <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
              <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500">
                DISCOVER NOW
              </span>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:w-6/12">
          <div className="lg:flex lg:flex-col lg:w-6/12  lg:px-3">
            <div
              className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 lg:mb-2 bg-red-400 rounded-lg mt-7 lg:h-auto lg:mt-0 "
              style={{
                backgroundImage:
                  "url(https://dm2305files.storage.live.com/y4m5YYlfJrmTyb6I29NEDIK9Db2_rQiIf7clGZN5M8aDySCkO_1iB30hmHmxgk-74-52C8hbY0qdOlIX1UPp16QFmCu1h6bj-Rz5eakGPctSPE438TAYK0O6kY9-fWApvyGchfb_AqYTVPEGgAaZ3xyhICkk0Na7U1vJnFqalM27fa71RDBfnSAsUBzi8EO7JAe?width=1000&height=887&cropmode=none)",
                backgroundSize: "50%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            >
              <div className="">
                <h3 className="font-bold text-white text-2xl lg:mb-6">
                Asus ROG <br /> RX 6700 XT
                </h3>
              </div>
              <div className="w-48 lg:mt-6">
                <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
                  
                  <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
                
                </div>
              </div>
            </div>
            <div
              className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 bg-gray-600 rounded-lg mt-7 lg:h-auto lg:mt-0 "
              style={{
                backgroundImage:
                  "url(./assets/masterbox.png)",
                backgroundSize: "40%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "90%",
              }}
            >
              <div className="">
                <h3 className="font-bold text-white text-2xl lg:mb-6">
                Cooler Master
                  <br />
                  MasterBox
                </h3>
              </div>
              <div className="w-48 lg:mt-6">
                <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
                <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-col lg:w-6/12  lg:pr-3">
            <div
              className="w-full h-80  flex flex-col justify-between p-6 lg:p-2 lg:mb-2 bg-orange-400 rounded-lg mt-7 lg:h-auto lg:mt-0 "
              style={{
                backgroundImage:
                  "url(./assets/cpu-gaming.png)",
                backgroundSize: "40%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "90%",
              }}
            >
              <div className="">
                <h3 className="font-bold text-white text-2xl lg:mb-6">
                Ryzen 5 <br /> 5600X
                </h3>
              </div>
              <div className="w-48 lg:mt-6">
                <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
                <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
                </div>
              </div>
            </div>
            <div
              className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 bg-green-700 rounded-lg mt-7 lg:h-auto lg:mt-0 "
              style={{
                backgroundImage:
                  "url(./assets/mouse.png)",
                backgroundSize: "60%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            >
              <div className="">
                <h3 className="font-bold text-white text-2xl lg:mb-6">
                Razer
                  <br />
                  DeathAdder
                </h3>
              </div>
              <div className="w-48 lg:mt-6">
                <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
                <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Carousel />


      <div className=" pt-7 flex flex-col lg:flex-row">
        <div className="lg:flex lg:flex-col lg:w-3/12 lg:pl-3">
          <div
            className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 lg:mb-2 bg-red-400 rounded-lg mt-7 lg:h-auto lg:mt-0 "
            style={{
              backgroundImage:
                "url(https://dm2305files.storage.live.com/y4m5YYlfJrmTyb6I29NEDIK9Db2_rQiIf7clGZN5M8aDySCkO_1iB30hmHmxgk-74-52C8hbY0qdOlIX1UPp16QFmCu1h6bj-Rz5eakGPctSPE438TAYK0O6kY9-fWApvyGchfb_AqYTVPEGgAaZ3xyhICkk0Na7U1vJnFqalM27fa71RDBfnSAsUBzi8EO7JAe?width=1000&height=887&cropmode=none)",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <div className="">
              <h3 className="font-bold text-white text-2xl lg:mb-6">
                GPU <br /> Gaming
              </h3>
            </div>
            <div className="w-48 lg:mt-6 invisible">
              <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
              <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
              </div>
            </div>
          </div>
          <div
            className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 bg-gray-500 rounded-lg mt-7 lg:h-auto lg:mt-0 "
            style={{
              backgroundImage:
                "url(https://i.blogs.es/2a1b25/logitech-g-pro-3/450_1000.png)",
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <div className="">
              <h3 className="font-bold text-white text-2xl lg:mb-6">
                Gaming 
                <br />
                Headset
              </h3>
            </div>
            <div className="w-48 lg:mt-6 invisible">
              <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
              <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-80 lg:h-auto flex flex-col justify-between p-6 bg-blue-400 rounded-lg lg:w-3/12 lg:mx-2"
          style={{
            backgroundImage:
              //   "url(https://i.blogs.es/2a1b25/logitech-g-pro-3/450_1000.png)",
              "url(./assets/case.png)",
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: " 50% 75%",
          }}
        >
          <div className="">
            <h3 className="font-bold text-white text-2xl ">
              Gaming Cases
              <br />
              Lighting Effect
            </h3>
          </div>
          <div className="w-48 lg:mt-6 invisible">
            <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
            <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:w-3/12 ">
          <div
            className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 lg:mb-2 bg-blue-700 rounded-lg mt-7 lg:h-auto lg:mt-0 "
            style={{
              backgroundImage:
                "url(./assets/monitor.png)",
              backgroundSize: "50%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "90%",
            }}
          >
            <div className="">
              <h3 className="font-bold text-white text-2xl lg:mb-6">
                Monitor <br /> Gaming
              </h3>
            </div>
            <div className="w-48 lg:mt-6 invisible">
              <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
              <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
              </div>
            </div>
          </div>
          <div
            className="w-full h-80 flex flex-col justify-between p-6 lg:p-2 bg-green-600 rounded-lg mt-7 lg:h-auto lg:mt-0 "
            style={{
              backgroundImage:
                "url(./assets/mouse.png)",
              backgroundSize: "60%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <div className="">
              <h3 className="font-bold text-white text-2xl lg:mb-6">
                Mouse
                <br />
                Lighting Effect
              </h3>
            </div>
            <div className="w-48 lg:mt-6 invisible">
              <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
              <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-80 lg:h-auto flex flex-col justify-between p-6 bg-red-400 rounded-lg lg:w-3/12 lg:mx-2"
          style={{
            backgroundImage:
              //   "url(https://i.blogs.es/2a1b25/logitech-g-pro-3/450_1000.png)",
              "url(./assets/cpu-gaming.png)",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: " 50% 75%",
          }}
        >
          <div className="">
            <h3 className="font-bold text-white text-2xl ">
              CPU
              <br />
              Gaming
            </h3>
          </div>
          <div className="w-48 lg:mt-6 invisible">
            <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-white text-white relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
            <Link to="/products" > <span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500"> DISCOVER NOW</span></Link> 
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;