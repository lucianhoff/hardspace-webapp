import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import productsActions from "../redux/actions/productsActions";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useParams } from "react-router";
import SwiperCore, { EffectFlip, Pagination, Navigation } from "swiper";
import { connect, useSelector, useDispatch } from "react-redux";
import Reviews from "../components/Reviews"

import "../CSS/swiper2.css"
import usersActions from "../redux/actions/usersActions";
SwiperCore.use([EffectFlip, Pagination, Navigation]);

const Product = (props) => {
    const params = useParams();
    const id = params.id;
    const dispatch = useDispatch();
    const product = useSelector(state => state.productsReducer.product);
    console.log(product)
    useEffect(() => {
        dispatch(productsActions.getOneProduct(id));
    }, [])

    console.log(product)

    product && console.log(product.reviews.length)
    return (

        <>
            {product ?

                <>
                    <>
                        <div className="flex pt-20">
                            <div className="w-5/12 flex justify-center items-center">
                                <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={false} className="mySwiper swiper2"
                                    style={{
                                        width: " 400px",
                                        height: " 400px",
                                        padding: "50px",
                                    }}>
                                    {
                                        product.images.map((image, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <img src={image} alt="" style={{
                                                        width: "100%",
                                                        height: "100%",
                                                    }} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }


                                </Swiper>
                            </div>
                            <div className="w-7/12" style={{ padding: "50px" }}>
                                <p className="text-xl font-bold pb-5">{product.name}</p>
                                <div className="flex flex-col pb-5">
                                    <p className="text-xl"> <span className="font-bold">Price: </span>{`$${product.price}`}</p>
                                    <p className="text-xl font-bold">{`Stock: ${product.stock}`}</p>
                                    <p className="text-xl font-bold">{`Brand: ${product.brand}`}</p>
                                    <p className="text-xl font-bold">{`Category: ${product.category}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-24">
                            <p className="text-xl font-bold py-5"> About this item ... </p>
                            <ul className="list-disc">
                                {product.description.map((description, index) => {
                                    return (
                                        <li key={index} className="py-3">{description}</li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </>
                    {/* <Reviews productId={id} reviews={product.reviews}/> */}
                </>
                : <p>LOADING</p>}


        </>
    );

};

// const mapStateToProps = (state) => {
//     return {
//         product: state.productsReducer.product,
//     };
// };

// const mapDispatchToProps = {
//     getOneProduct: productsActions.getOneProduct,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Product);

export default Product;