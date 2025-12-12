import CartItem from "./CartItem";
import style from '../Cart/Cart.module.css';
import Summary from "./Summary";
import { useSelector } from "react-redux";

export default function Cart() {
    
    const homeProducts = useSelector((store) => store.homeProducts);
    const bagItems = useSelector((store) => store.bagItems);

    const finalItem = homeProducts.filter(item => {
        const itemIndex = bagItems.indexOf(item.id);
        return itemIndex >=0;
    })
    return (
        <div className={style.cart}>
            <div className="items">
                {finalItem.map(item =>{
                    return <CartItem title={item.title} image={item.img} price={item.price}/>
                }) }
            </div>
            <div>
               <Summary/>
            </div>
        </div>
    );
};
