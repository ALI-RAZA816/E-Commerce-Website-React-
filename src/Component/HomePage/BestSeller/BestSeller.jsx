import style from './BestSeller.module.css';
import Item from '../Collection/Item'
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';

export default function BestSeller() {

    const initialFetch = useSelector((store) => store.intialFetch);
    const homeProducts = useSelector((store) => store.homeProducts);
    const bestSellers = homeProducts.slice(0,5);
    const {detailHandler} = useContext(contextProvider);

    return (
        <div className={style.BestSeller}>
            <h1>Best <span>Seller</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            {initialFetch.currentFetch === true ? <Loader/>:<div className={style.products}>
                {bestSellers.map((item, index) =>{
                    return <Link onClick = {() => detailHandler(index)} style={{textDecoration:'none'}} key = {index} to="/productDetail"><Item  id = {item.id} img = {item.img} title = {item.title} price = {item.price}/></Link> 
                })}
            </div>}
        </div>
    )
}
