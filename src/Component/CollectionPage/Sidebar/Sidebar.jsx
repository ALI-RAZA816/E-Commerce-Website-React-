import { useSelector } from 'react-redux';
import style from '../Sidebar/Sidebar.module.css';
import { BsFillFilterSquareFill } from "react-icons/bs";

export default function Sidebar({ showFilterBox, showFilter }) {

  const products = useSelector((store) => store.homeProducts);
  const category = [];
  const type = [];
  products.map(item => {
    if (!category.includes(item.category)) {
      category.push(item.category);
      return;
    }
  });
  products.map(item => {
    if (!type.includes(item.type)) {
      type.push(item.type);
      return;
    }
  });
  return (
    <div className={`${style.sidebar} ${showFilter === true && style.active}`}>
      <h1><BsFillFilterSquareFill onClick={showFilterBox} className={style.filterIcon} />Filters</h1>
      <div className={style.category} style={{ marginBottom: '1rem' }}>
        <h3>Categories</h3>
        {category.map(item => {
          return <div>
            <input type="checkbox" id= {item} />
            <label htmlFor={item} >{item}</label>
          </div>
        })}
      </div>
      <div className={style.type}>
        <h3>Type</h3>
        {type.map(item => {
          return <div>
            <input type="checkbox" id={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        })}
      </div>
    </div>
  )
}
