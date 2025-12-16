import style from '../ProductDetail/RelatedProduct.module.css';
import Item from '../HomePage/Collection/Item';
import {Link} from "react-router-dom";

export default function RelatedProducts() {

    return (
        <div className={style.relatedProducts} style={{margin:'13rem 0'}}>
            <h1>Related <span>Products</span></h1>
            <div className={style.products}>
                <Link style={{textDecoration:'none'}} to="/productDetail"><Item/></Link>
            </div>
        </div>
    )
}
