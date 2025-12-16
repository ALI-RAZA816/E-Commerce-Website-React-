import style from '../Header/CollectionPage.module.css';
import Sidebar from '../Sidebar/Sidebar';
import Item from '../../HomePage/Collection/Item';

import {
  Link
} from "react-router-dom";
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';


export default function CollectionPage() {

  const {showFilterBox} = useContext(contextProvider);
  const {showFilter} = useContext(contextProvider);
  const {productsData} = useContext(contextProvider);
  const {productDetailHandler} = useContext(contextProvider);
  
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
           {productsData.map((item,index) => {
            return <Link onClick = {() => productDetailHandler(index)} key={index} style={{textDecoration:'none'}} to="/productDetail"><Item title={item.title} image = {item.img} price = {item.price}/></Link>
           })}
        </div>
      </div>
    </div>
  )
}

