
import style from '../Collection/ProductsGrid.module.css';
import Item from './Item';
import {useSelector } from 'react-redux';

export default function ProductsContainer() {

  const homeProducts = useSelector((store) => store.homeProducts);
  return (
    <div className={style.ProductsContainer}>
      <div className={style.productGrid}>
        {homeProducts.map((item,index)=>{
            return <Item key = {index} img = {item.img} title = {item.title} price = {item.price} /> 
        })}
      </div>
    </div>
  );
}
