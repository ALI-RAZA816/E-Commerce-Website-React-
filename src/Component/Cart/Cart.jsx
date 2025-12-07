import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css'
export default function Cart() {
    return (
        <div className={style.cart}>
            <div className="items">
                <CartItem />
            </div>
            <div className={style.summary}>
                <h1>Cart <span>Summary</span></h1>
                <div className="subtotal">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                </div>
                <div className="shipping fee">
                    <span>Shipping Fee</span>
                    <span>$0.00</span>
                </div>
                <div className="Total">
                    <span>Total</span>
                    <span>$0.00</span>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}
