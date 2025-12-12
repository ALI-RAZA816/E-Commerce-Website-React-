import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";
import { useSelector } from "react-redux";
import CartEmpty from "../CartEmpty/CartEmpty";

export default function Cart() {
    
    const homeProducts = useSelector((store) => store.homeProducts);
    const bagItems = useSelector((store) => store.bagItems);

    const finalItem = homeProducts.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >=0;
    })
    return (
        <div className={style.cart}>
            {bagItems.length === 0 ?<CartEmpty/>:<div className="items">
                {finalItem.map(item =>{
                    return <CartItem title={item.title} id = {item.id} image={item.img} price={item.price}/>
                }) }
            </div>}
            <div>
               <Summary/>
            </div>
        </div>
    );
};
