import { useSelector } from 'react-redux';
import style from '../Collection/Collection.module.css';
import ProductsContainer from './ProductsContainer';
import Loader from '../../Loader/Loader';

export default function Collection() {
  const initialFetch = useSelector((store) => store.intialFetch);
  return (
    <div className={style.productsCollection}>
      <h1>Latest <span>Collection</span></h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
      {initialFetch.currentFetch === true ? <Loader/>:<ProductsContainer/>}
    </div>
  )
}
