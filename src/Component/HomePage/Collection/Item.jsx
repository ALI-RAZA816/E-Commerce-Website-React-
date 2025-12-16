import { useContext } from 'react';
import style from '../Collection/Item.module.css';

export default function Item() {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src='/Images/collections/p_img3.png' alt="" />
      </div>
      <p className={style.title}>Title</p>
      <span className={style.price}>$ 45</span>
    </div>
  )
}
