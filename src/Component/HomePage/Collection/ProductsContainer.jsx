
import style from '../Collection/ProductsGrid.module.css';
import Item from './Item';
import { Link } from "react-router-dom";

export default function ProductsContainer() {
  return (
    <div className={style.ProductsContainer}>
      <div className={style.productGrid}>
          <Link style ={{textDecoration:'none'}} to="/productDetail"><Item/></Link>
      </div>
    </div>
  );
}
