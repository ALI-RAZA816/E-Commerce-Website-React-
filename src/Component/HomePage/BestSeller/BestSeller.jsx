import style from './BestSeller.module.css';
import Item from '../Collection/Item'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';


export default function BestSeller() {
    const {products} = useContext(contextProvider);
    const {productDetailHandler} = useContext(contextProvider);
      const BestSeller = products.slice(0,5);
    return (
        <div className={style.BestSeller}>
            <h1>Best <span>Seller</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            {/* <Loader/> */}
            <div className={style.products}>
                {BestSeller.map((item,index) =>{
                    return <Link onClick = {() => productDetailHandler(index)} key={index} style={{textDecoration:'none'}} to="/productDetail"><Item title={item.title} price={item.price} image = {item.img}/></Link>
                })}
            </div>
        </div>
    )
}
