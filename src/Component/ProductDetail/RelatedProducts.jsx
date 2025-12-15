import style from '../ProductDetail/RelatedProduct.module.css';
import Item from '../HomePage/Collection/Item';
import {
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import contextProvider from '../../assets/ContextProvider/ContextStore';
export default function RelatedProducts() {

    const {productDetailHandler} = useContext(contextProvider);
    const homeProducts = useSelector((store) => store.homeProducts);
    const collectionProduct = homeProducts.slice(0,5);

    return (
        <div className={style.relatedProducts} style={{margin:'13rem 0'}}>
            <h1>Related <span>Products</span></h1>
            <div className={style.products}>
                {collectionProduct.map((item, index) => {
                    return <Link onClick={()=> productDetailHandler(item.title,item.price,item.img)}  key={index} style={{textDecoration:'none'}} to="/productDetail"><Item img={item.img} title={item.title} price={item.price} /></Link>
                })}
            </div>
        </div>
    )
}
