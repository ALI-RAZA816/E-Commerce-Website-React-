import style from '../Collection/ProductsGrid.module.css';
import Item from './Item';
import { collectionProduct } from '../../../../productData';
export default function ProductsContainer() {

  return (
    <div className={style.ProductsContainer}>
      <div className={style.productGrid}>
        {collectionProduct.map((item,index)=>{
            return <Item key = {index} img = {item.img} title = {item.title} price = {item.price} /> 
        })}
      </div>
    </div>
  )
}
