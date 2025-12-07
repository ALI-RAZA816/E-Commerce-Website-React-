import style from '../ProductDetail/RelatedProduct.module.css';
import Item from '../HomePage/Collection/Item';
import {
  Link
} from "react-router-dom";
export default function RelatedProducts() {

    const collectionProduct = [
        {
            img: '/Images/collections/Rectangle 3608.png',
            title: 'Women Round Neck Cotton Top',
            price: '149'
        },
        {
            img: '/Images/collections/Rectangle 3609.png',
            title: 'Women Round Neck Cotton Top',
            price: '40'
        },
        {
            img: '/Images/collections/Rectangle 3619.png',
            title: 'Women Round Neck Cotton Top',
            price: '40'
        },
        {
            img: '/Images/collections/Rectangle 3611.png',
            title: 'Men Round Neck Pure Cotton T-shirt',
            price: '46'
        },
        {
            img: '/Images/collections/Rectangle 3635.png',
            title: 'Men Round Neck Pure Cotton T-shirt',
            price: '26'
        },
    ]
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
