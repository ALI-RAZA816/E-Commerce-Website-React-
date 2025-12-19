
import { useContext } from 'react';
import style from '../Collection/ProductsGrid.module.css';
import Item from './Item';
import { Link } from "react-router-dom";
import contextProvider from '../../../assets/ContextProvider/ContextStore';

export default function ProductsContainer() {

  // context
  const {products} = useContext(contextProvider);
  const {productDetailHandler} = useContext(contextProvider);
  
  // splice items
  const homeProducts = products.slice(0,10);

  return (
    <div className={style.ProductsContainer}>
      <div className={style.productGrid}>
          {homeProducts.map((item,index)=>{
            return <Link onClick = {() => productDetailHandler(index)} key={index} style ={{textDecoration:'none'}} to="/productDetail"><Item title={item.title} image = {item.img} price = {item.price}/></Link>
          })}
      </div>
    </div>
  );
}
