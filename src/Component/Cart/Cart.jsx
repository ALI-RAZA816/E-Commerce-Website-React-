import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";
import { useSelector } from "react-redux";
import CartEmpty from "../CartEmpty/CartEmpty";
import { useContext } from "react";
import contextProvider from "../../assets/ContextProvider/ContextStore";


export default function Cart() {
    const bagItems = useSelector((store) => store.bagItems);
    const {quantity} = useContext(contextProvider);
    const SHIPPING_FEE = 10;
    const subTotal = bagItems.reduce((item, currentPrice) => {
        return item + currentPrice.price;
    },0);

    const itemPrice = subTotal * quantity;
    const total = itemPrice + SHIPPING_FEE;

    return (
        <div className={style.cart}>
            {bagItems.length === 0 ?<CartEmpty/>:<div className="items">
                {bagItems.map((item, index) =>{
                    return <CartItem title={item.title} image={item.img} price={item.price}/>
                }) }
            </div>}
            <div>
               <Summary itemPrice = {itemPrice} total = {total} shippingFee = {SHIPPING_FEE} />
            </div>
        </div>
    );
};
