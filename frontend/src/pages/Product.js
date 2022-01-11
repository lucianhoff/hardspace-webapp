import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { EffectFlip, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectFlip, Pagination, Navigation]);
const Product = () => {
  let product = {
    name: "ASUS ROG Strix AMD Radeon RX 6700 XT OC 12GB GDDR6",
    images: [
      "https://by3301files.storage.live.com/y4mQFLnYlVONV6bfNNBR9tKfZhin78h363ZLoC2F9GgU5d7n6WoRdyyKWHbhUdeOibq_KmLOzdg9I9-qsTlOvkz9RvdqJNrTQV__NYv9MC1HbXQK5u3dDIjc0fxSDYIjjIukaHFSqU8dE3Mr9hrkwh-LhZB9u4sTY3f1LJWZ0x4tgKehT_B9L5AkAKPDnjJiH09?width=679&height=744&cropmode=none",
      "https://by3301files.storage.live.com/y4m0qr5XDTgVl0CKFhrMHIg2HM-Umz5ojKUnwLf447xavywcb5ROj_FvOEWzfrjgq3kFT-baFdvkWqHMNaMLQU7UbsPK4wZ-ktQuCLY80BJjIgDBcKUQMW0gweNMYjff3nAHZC0JsZYC5d7nY4Oj_V-VXg4_LKvs6xj3jqXY-ulVYhxJmXAAWEQvQbWxHwMQ4Gu?width=602&height=450&cropmode=none",
      "https://by3301files.storage.live.com/y4mFzylNnUbcnoBkhvb32NiJPHZd9pKWFtf1TOJaiWq7kWBJS9YYNUTw-uY8-U4QdACJfeDTWu48gcwtwIMxCKXdbSsACF-vzc1DefDb8hDl82d3iU3CbTbI83FloTywjHUqSSuAHbQnYXWtA49TK7TczcuRbtrDW897A9NvTSx4baZhmRFM-Mkwu59EpEX7ceD?width=524&height=450&cropmode=none",
    ],
    price: 1330.0,
    stock: 5,
    brand: "ASUS",
    category: "GPU",
    description: [
      "Axial-tech Fan Design has been enhanced with more fan blades and a new rotation scheme",
      "2.9-slot design expands cooling surface area compared to last gen for more thermal headroom than ever before",
      "Super Alloy Power II includes premium alloy chokes, solid polymer capacitors, and an array of high-current power stages",
      "MaxContact heat spreader allows 2X more contact with the GPU chip for improved thermal transfer",
      "Reinforced frame prevents excessive torsion and lateral bending of the PCB",
      "FanConnect II equips a hybrid-controlled fan header for optimal system cooling",
      "Vented backplate prevents hot air from recirculating through the cooling array",
    ],
    imagesDescription: [],
  };

  return (
    <>
      <div className="md:flex py-20 md:py-44">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={false}
          className="mySwiper w-4/12"
        >
          {product.images.map((image, index) => {
            return (
              <SwiperSlide>
                <img src={image} className="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full md:w-6/12 py-12 md:py-0">
          <h1 className="font-bold text-2xl text-center md:text-left">
            {product.name}
          </h1>
          <div className="flex justify-center items-center md:items-start flex-col py-8 md:py-0">
            <p className="font-bold text-xl text-sky-500 py-1">
              {" "}
              Brand: {product.brand}
            </p>

            <p className="font-bold text-xl text-sky-500 py-1">
              {" "}
              Stock: {product.stock}
            </p>
            <p className="font-bold text-xl text-sky-500 py-1">
              {" "}
              Price: ${product.price}
            </p>
          </div>
          <div>
            <h2 className="font-bold text-2xl pt-14 pl-5 md:pl-0">
              About this item ...
            </h2>
            <ul className="p-5 md:p-0">
              {product.description.map((description, index) => {
                return (
                  <li className="py-1">
                    <p className="font-bold text-lg text-sky-500 ">
                      {description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          {/**/}
          <div className=" flex justify-center items-center md:block ">
            <div className="w-48 mt-5">
              <div className="group text-center font-bold [transform:translateZ(0)] px-6 py-3 rounded-lg overflow-hidden bg-transparent border-2 border-gray-900 text-gray-900 relative before:absolute before:bg-emerald-500 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500 cursor-pointer transition-all hover:border-emerald-500">
                <span className="relative z-0 group-hover:text-white transition ease-in-out duration-500">
                  ADD CART
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
