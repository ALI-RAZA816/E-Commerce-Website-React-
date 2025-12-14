import { useDispatch } from 'react-redux';
import style from '../Cart/CartItem.module.css';
import { RiDeleteBinLine } from "react-icons/ri";
import { bagActions } from '../../Store/bagItems';
import { useContext } from 'react';
import contextProvider from '../../assets/ContextProvider/ContextStore';
export default function CartItem({title,price,image}) {

    const {quantity} = useContext(contextProvider);
    const {quantityHandler} = useContext(contextProvider);
    
    return (
        <div>
            <div className={style.cartProduct}>
                <div className={style.productDetail}>
                    <img src={image} alt="" />
                    <div>
                        <p className='title'>{title}</p>
                        <div style={{ margin: '1rem 0' }}>
                            <span className='price'>${price}</span>
                            <span className='size'>L</span>
                        </div>
                    </div>
                </div>
                <div className={style.quantity}>
                    <input type="number" min={1} value={quantity} onChange={quantityHandler} placeholder='1' />
                </div>
                <RiDeleteBinLine style={{ fontSize: '20px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}
