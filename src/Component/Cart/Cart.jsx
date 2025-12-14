import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";
import { useSelector } from "react-redux";
import CartEmpty from "../CartEmpty/CartEmpty";
import { useContext } from "react";
import contextProvider from "../../assets/ContextProvider/ContextStore";

export default function Cart() {
    const {quantity} = useContext(contextProvider);
    const homeProducts = useSelector((store) => store.homeProducts);
    const bagItems = useSelector((store) => store.bagItems);

    const finalItem = homeProducts.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >=0;
    });

    const SHIPPING_FEE = 10;
    const itemsPrice = finalItem.reduce((items ,currentItem) =>{
        return items + currentItem.price;
    },0);

    const itemstotal = itemsPrice * quantity

   const subTotal =  itemstotal + SHIPPING_FEE;

    return (
        <div className={style.cart}>
            {bagItems.length === 0 ?<CartEmpty/>:<div className="items">
                {finalItem.map((item, index) =>{
                    return <CartItem title={item.title} id = {item.id} image={item.img} price={item.price}/>
                }) }
            </div>}
            <div>
               <Summary itemstotal = {itemstotal} subTotal = {subTotal} SHIPPING_FEE = {SHIPPING_FEE}/>
            </div>
        </div>
    );
};
