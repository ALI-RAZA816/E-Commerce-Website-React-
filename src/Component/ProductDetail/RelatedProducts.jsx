import style from '../ProductDetail/RelatedProduct.module.css';
import Item from '../HomePage/Collection/Item';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import contextProvider from '../../assets/ContextProvider/ContextStore';

export default function RelatedProducts() {

    const {productsData} = useContext(contextProvider);
    const relatedProducts = productsData.slice(0,5);
    const {productDetailHandler} = useContext(contextProvider);

    return (
        <div className={style.relatedProducts} style={{margin:'13rem 0'}}>
            <h1>Related <span>Products</span></h1>
            <div className={style.products}>
                {relatedProducts.map((item,index) =>{
                    return <Link key={index} onClick = {() => productDetailHandler(index)} style={{textDecoration:'none'}} to="/productDetail"><Item title={item.title} image = {item.img} price = {item.price}/></Link>
                })}
            </div>
        </div>
    )
}
