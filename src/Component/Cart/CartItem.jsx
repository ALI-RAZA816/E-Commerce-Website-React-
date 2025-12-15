import style from '../Cart/CartItem.module.css';
import { RiDeleteBinLine } from "react-icons/ri";

export default function CartItem() {
    return (
        <div>
            <div className={style.cartProduct}>
                <div className={style.productDetail}>
                    <img src='/Images/collections/p_img3.png' alt="" />
                    <div>
                        <p className='title'>Title</p>
                        <div style={{ margin: '1rem 0' }}>
                            <span className='price'>$40</span>
                            <span className='size'>L</span>
                        </div>
                    </div>
                </div>
                <div className={style.quantity}>
                    <input type="number" min={1} placeholder='1' />
                </div>
                <RiDeleteBinLine style={{ fontSize: '20px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}
