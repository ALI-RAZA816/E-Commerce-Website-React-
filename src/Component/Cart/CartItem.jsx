import { useDispatch } from 'react-redux';
import style from '../Cart/CartItem.module.css';
import { RiDeleteBinLine } from "react-icons/ri";
import { bagActions } from '../../Store/bagItems';
export default function CartItem({title,price,image,id}) {

    const dispatch = useDispatch();
    const removeItem = () =>{
        dispatch(bagActions.removeFromBag(id));
    }
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
                    <input type="number" min={1} placeholder='1' />
                </div>
                <RiDeleteBinLine onClick={removeItem} style={{ fontSize: '20px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}
