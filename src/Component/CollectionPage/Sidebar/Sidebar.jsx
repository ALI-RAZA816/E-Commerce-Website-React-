
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';
import style from '../Sidebar/Sidebar.module.css';
import { BsFillFilterSquareFill } from "react-icons/bs";

export default function Sidebar() {

  const { showFilterBox } = useContext(contextProvider);
  const { showFilter } = useContext(contextProvider);
  const { productsData } = useContext(contextProvider);
  const { categoryHandler } = useContext(contextProvider);
  const categories = [];
  const type = [];
  productsData.map(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  productsData.map(item => {
    if (!type.includes(item.type)) {
      type.push(item.type);
    }
  });

  return (
    <div className={`${style.sidebar} ${showFilter === true && style.active}`}>
      <h1><BsFillFilterSquareFill onClick={showFilterBox} className={style.filterIcon} />Filters</h1>
      <div className={style.category} style={{ marginBottom: '1rem' }}>
        <h3>Categories</h3>
        {categories.map((item, index) => {
          return <div key={index}>
            <input type="checkbox" id={item} />
            <label htmlFor={item} >{item}</label>
          </div>
        })}
      </div>
      <div className={style.type}>
        <h3>Type</h3>
        {type.map((item, index) => {
          return <div key={index}>
            <input type="checkbox" id={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        })}
      </div>
    </div>
  )
}
