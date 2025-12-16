
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';
import style from '../Sidebar/Sidebar.module.css';
import { BsFillFilterSquareFill } from "react-icons/bs";

export default function Sidebar() {

  const {showFilterBox}= useContext(contextProvider);
  const {showFilter}= useContext(contextProvider);
  
  return (
    <div className={`${style.sidebar} ${showFilter === true && style.active}`}>
      <h1><BsFillFilterSquareFill onClick={showFilterBox} className={style.filterIcon} />Filters</h1>
      <div className={style.category} style={{ marginBottom: '1rem' }}>
        <h3>Categories</h3>
          <div>
            <input type="checkbox" id= 'Women' />
            <label htmlFor='Women' >Women</label>
          </div>
          <div>
            <input type="checkbox" id= 'Women' />
            <label htmlFor='Women' >Women</label>
          </div>
          <div>
            <input type="checkbox" id= 'Women' />
            <label htmlFor='Women' >Women</label>
          </div>
      </div>
      <div className={style.type}>
        <h3>Type</h3>
        <div>
            <input type="checkbox" id= 'topwear' />
            <label htmlFor='topwear'>Topwear</label>
        </div>
        <div>
            <input type="checkbox" id= 'topwear' />
            <label htmlFor='topwear'>Topwear</label>
        </div>
        <div>
            <input type="checkbox" id= 'topwear' />
            <label htmlFor='topwear'>Topwear</label>
        </div>
      </div>
    </div>
  )
}
