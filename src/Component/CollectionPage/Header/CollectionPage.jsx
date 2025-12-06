import Item from '../../HomePage/BestSeller/Item';
import style from '../Header/CollectionPage.module.css';
import Sidebar from '../Sidebar/Sidebar';
import { collectionProduct } from '../../../../productData';
export default function CollectionPage() {
  return (
    <div className={style.pageContainer}>
      <div className={style.sideBar}>
        <Sidebar />
      </div>
      <div className={style.product}>
        <div>
          <h1>All <span>collections</span></h1>
          <div className={style.sorting}>
            <select name="" id="">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low to high">Sort by: Low to High</option>
              <option value="high to low">Sort by: Hight to Low</option>
            </select>
          </div>
        </div>
        <div className={style.productsData}>
          {collectionProduct.map((item, index) => {
            return <Item key={index} img={item.img} title={item.title} price={item.price} />
          })}
        </div>
      </div>
    </div>
  )
}

