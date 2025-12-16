
import style from '../Collection/Collection.module.css';
import ProductsContainer from './ProductsContainer';


export default function Collection() {
  
  return (
    <div className={style.productsCollection}>
      <h1>Latest <span>Collection</span></h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      {/* <Loader/> */}
      <ProductsContainer/>
    </div>
  )
}
