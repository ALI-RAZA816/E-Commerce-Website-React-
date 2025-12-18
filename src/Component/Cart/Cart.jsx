import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";
import { useContext } from "react";
import contextProvider from "../../assets/ContextProvider/ContextStore";

export default function Cart() {

    const {cartItem} = useContext(contextProvider);

    return (
        <div className={style.cart}>
            {/* <CartEmpty/> */}
            <div className="items">
                {cartItem.map((item,index)=>{
                   return <CartItem key={index} id = {item.id} productSize = {item.productSize} title={item.title} price={item.price} image={item.img} />
                })}
            </div>
            <div>
               <Summary/>
            </div>
        </div>
    );
};
