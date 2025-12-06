import style from '../Sidebar/Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <h1>Filters</h1>
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
    </div>
  )
}
