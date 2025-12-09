import style from '../Collection/ProductsGrid.module.css';
import Item from './Item';
import { useSelector } from 'react-redux';




export default function ProductsContainer() {

  const collectionProduct = useSelector(store => store.Items);
  console.log(collectionProduct);

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
