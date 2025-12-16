import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";

export default function Cart() {
    
    return (
        <div className={style.cart}>
            {/* <CartEmpty/> */}
            <div className="items">
                <CartItem />
            </div>
            <div>
               <Summary/>
            </div>
        </div>
    );
};
