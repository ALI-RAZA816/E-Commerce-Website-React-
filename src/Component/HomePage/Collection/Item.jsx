import { useDispatch, useSelector } from 'react-redux';
import style from '../Collection/Item.module.css';
import {
  Link
} from "react-router-dom";
export default function Item({img, title, price }) {
  return (
    <Link className ={style.link} to="/productDetail"><div className={style.card}>
      <div className={style.img}>
        <img src={img} alt="" />
      </div>
      <p className={style.title}>{title}</p>
      <span className={style.price}>$ {price}</span>
    </div>
    </Link>
  )
}
