import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";
import { useSelector } from "react-redux";


export default function Cart() {
    
    const bagItems = useSelector((store) => store.bagItems);
    
    return (
        <div className={style.cart}>
            {/* <CartEmpty/> */}
            <div className="items">
                {bagItems.map((item, index) => {
                    return <CartItem key={index} item = {item} />
                })}
            </div>
            <div>
               <Summary/>
            </div>
        </div>
    );
};
