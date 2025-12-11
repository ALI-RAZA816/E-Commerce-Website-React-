
import style from './BestSeller.module.css';
import Item from '../Collection/Item'
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';

export default function BestSeller() {
    const initialFetch = useSelector((store) => store.intialFetch);
    const products = useSelector((store) => store.homeProducts);

    const bestSellers = products.slice(8,13);
    return (
        <div className={style.BestSeller}>
            <h1>Best <span>Seller</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            {initialFetch.currentFetch === true ? <Loader/>:<div className={style.products}>
                {bestSellers.map((item, index) =>{
                    return <Item key = {index} img = {item.img} title = {item.title} price = {item.price}/> 
                })}
            </div>}
        </div>
    )
}
