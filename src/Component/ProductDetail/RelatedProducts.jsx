import style from '../ProductDetail/RelatedProduct.module.css';
import Item from '../HomePage/Collection/Item';
import {
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
export default function RelatedProducts() {
    const homeProducts = useSelector((store) => store.homeProducts);

    const collectionProduct = homeProducts.slice(0,5);
    return (
        <div className={style.relatedProducts} style={{margin:'13rem 0'}}>
            <h1>Related <span>Products</span></h1>
            <div className={style.products}>
                {collectionProduct.map((item, index) => {
                    return <Link style={{textDecoration:'none'}} to="/productDetail"><Item key={index} img={item.img} title={item.title} price={item.price} /></Link>
                })}
            </div>
        </div>
    )
}
