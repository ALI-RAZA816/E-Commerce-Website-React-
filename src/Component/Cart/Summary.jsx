import React from 'react'
import style from '../Cart/Summary.module.css';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import PaymentMethod from './PaymentMethod';


export default function Summary({itemPrice, shippingFee,total}) {
    const location = useLocation();
    return (
        <div className={style.summary}>
            <h1>Cart <span>Summary</span></h1>
            <div className="subtotal">
                <span>Subtotal</span>
                <span>${itemPrice}.00</span>
            </div>
            <div className="shipping fee">
                <span>Shipping Fee</span>
                <span>${shippingFee}.00</span>
            </div>
            <div className="Total">
                <span>Total</span>
                <span>${total}.00</span>
            </div>
            {location.pathname === '/delivery' && <PaymentMethod/>}
            {location.pathname === '/delivery' ?<Link style={{textDecoration:'none'}} to="/delivery"><button>Place Order</button></Link>:<Link style={{textDecoration:'none'}} to="/delivery"><button>Proceed to checkout</button></Link>}
        </div>
    )
}
