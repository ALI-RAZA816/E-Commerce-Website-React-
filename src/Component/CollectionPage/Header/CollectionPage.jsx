import style from '../Header/CollectionPage.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Item from '../../HomePage/Collection/Item';
import { collectionProduct } from '../../../../productData';
import {
  Link
} from "react-router-dom";
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';

export default function CollectionPage() {

  const {showFilterBox} = useContext(contextProvider);
  const {showFilter} = useContext(contextProvider);

  return (
    <div className={style.pageContainer}>
      <div className={style.sideBar}>
        <Sidebar showFilter = {showFilter} showFilterBox = {showFilterBox} />
      </div>
      <div className={style.product}>
        <div>
          <h1>All <span>collections</span></h1>
          <div className={style.sorting}>
            <select name="" id="">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low to high">Sort by: Low to High</option>
              <option  value="high to low">Sort by: Hight to Low</option>
            </select>
          </div>
        </div>
        <div className={style.productsData}>
          {collectionProduct.map((item, index) => {
            return <Link style={{textDecoration:'none'}} to="/productDetail"><Item key={index} img={item.img} title={item.title} price={item.price} /></Link>
          })}
        </div>
      </div>
    </div>
  )
}

