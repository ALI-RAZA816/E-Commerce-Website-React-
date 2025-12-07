import style from '../Sidebar/Sidebar.module.css';
import { BsFillFilterSquareFill } from "react-icons/bs";

export default function Sidebar({showFilterBox, showFilter}) {
  return (
    <div className={`${style.sidebar} ${showFilter === true && style.active}`}>
      <h1><BsFillFilterSquareFill onClick={showFilterBox} className={style.filterIcon}/>Filters</h1>
      <div className={style.category} style={{marginBottom:'1rem'}}>
        <h3>Categories</h3>
        <div>
            <input type="checkbox" id='men' />
            <label htmlFor="men">Men</label>
        </div>
        <div>
            <input type="checkbox" id='women' />
            <label htmlFor="women">Women</label>
        </div>
        <div>
            <input type="checkbox" id='kids' />
            <label htmlFor="kids">Kids</label>
        </div>
      </div>
      <div className={style.type}>
        <h3>Type</h3>
        <div>
            <input type="checkbox" id='topwear' />
            <label htmlFor="topwear">Topwear</label>
        </div>
        <div>
            <input type="checkbox" id='bottomwear' />
            <label htmlFor="bottomwear">Bottomwear</label>
        </div>
        <div>
            <input type="checkbox" id='winterwear' />
            <label htmlFor="winterwear">Winterwear</label>
        </div>
      </div>
    </div>
  )
}
