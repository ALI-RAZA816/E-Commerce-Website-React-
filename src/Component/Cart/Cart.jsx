import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";
import { useContext } from "react";
import contextProvider from "../../assets/ContextProvider/ContextStore";
import CartEmpty from "../CartEmpty/CartEmpty";

export default function Cart() {

    // context
    const {cartItem} = useContext(contextProvider);

    return (
        <div className={style.cart}>
            {cartItem.length === 0 ? <CartEmpty/>:
            <div className="items">
                {cartItem.map((item,index)=>{
                   return <CartItem key={index} quantity = {item.quantity} id = {item.id} productSize = {item.itemSize} title={item.title} price={item.price} image={item.img} />
                })}
            </div>}
            <div>
               <Summary/>
            </div>
        </div>
    );
};
