import style from '../CartEmpty/CartEmpty.module.css';
import { MdRemoveShoppingCart } from "react-icons/md";


export default function CartEmpty() {
  return (
    // cart empty status 
    <div className={style.emptyStatus}>
        <MdRemoveShoppingCart style={{fontSize:'5rem',color:'#707070',marginBottom:'2rem'}} />
      <h1>Your Cart is Empty.</h1>
    </div>
  );
}
