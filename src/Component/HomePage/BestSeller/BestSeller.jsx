import style from './BestSeller.module.css';
import Item from '../Collection/Item'
import { Link } from "react-router-dom";


export default function BestSeller() {

    return (
        <div className={style.BestSeller}>
            <h1>Best <span>Seller</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            {/* <Loader/> */}
            <div className={style.products}>
                <Link style={{textDecoration:'none'}} to="/productDetail"><Item/></Link> 
            </div>
        </div>
    )
}
