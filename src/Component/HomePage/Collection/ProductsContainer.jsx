
import style from '../Collection/ProductsGrid.module.css';
import Item from './Item';
import {useSelector } from 'react-redux';

export default function ProductsContainer() {

  const homeProducts = useSelector((store) => store.homeProducts);
  const products = homeProducts.slice(0,10);
  return (
    <div className={style.ProductsContainer}>
      <div className={style.productGrid}>
        {products.map((item,index)=>{
            return <Item key = {index} img = {item.img} title = {item.title} price = {item.price} /> 
        })}
      </div>
    </div>
  );
}
