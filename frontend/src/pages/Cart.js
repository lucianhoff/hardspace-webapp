import React, { useEffect, useState } from 'react'
import IndividualCart from '../components/IndividualCart'
import productsActions from "../redux/actions/productsActions"
import { connect, useSelector } from 'react-redux'
import PayPal from '../components/PayPal'



function Cart(props) {

    const [arrayCart, setArrayCart] = useState([])
    const totalStatePrice = useSelector(store => store.productsReducer.totalPrice)

    const product = {
        description: "Design+code React Hooks Course",
        price: 19
    }

    useEffect(() => {
        allStorage()
    }, [])

    function allStorage() {
        var archive = [];
        var sumaProd = 0;
        var sumaPrice = 0;

        if (localStorage.length !== 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'token' && localStorage.key(i) !== "__paypal_storage__") {
                    archive[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    sumaProd = sumaProd + archive[i].qty
                    sumaPrice = sumaPrice + (archive[i].price * archive[i].qty)
                } else {
                    /* alert('este es el token') */
                }
            }

            setArrayCart(archive)
            props.setArrayStorage(archive)
            props.setTotalProducts(sumaProd)
            props.setTotalPrice(sumaPrice)

        }
    }

    return (
        <>
            <div className="padreContainerCart">
                <div className="containerCart">
                    {props.arraySt.length > 0
                        ? props.arraySt.map((elemento) => {

                            return (
                                <IndividualCart elemento={elemento} />
                            )

                        })

                        : <p className="articleTitle">Your cart is empty.</p>
                    }
                    <div className="totales">
                        <h3>Total price = ${totalStatePrice.toFixed(2)}</h3>
                    </div>
                    <div className="payment">
                        <h3>BUY WITH</h3>
                    </div>
                    <div className="paypal-btn">
                        <PayPal />
                    </div>
                </div>
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        arraySt: state.productsReducer.arrayStorage
    }
}

const mapDispatchToProps = {
    setArrayStorage: productsActions.setArrayStorage,
    setTotalPrice: productsActions.setTotalPrice,
    setTotalProducts: productsActions.setTotalProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)


