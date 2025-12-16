import style from '../Header/CollectionPage.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Item from '../../HomePage/Collection/Item';

import {
  Link
} from "react-router-dom";
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';
import { useSelector } from 'react-redux';
import Loader from '../../Loader/Loader';

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
       {/* <Loader/> */}
       <div className={style.productsData}>
           <Link style={{textDecoration:'none'}} to="/productDetail"><Item/></Link>
        </div>
      </div>
    </div>
  )
}

