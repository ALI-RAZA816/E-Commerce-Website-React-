import style from '../Collection/Item.module.css';
import {
  Link
} from "react-router-dom";

export default function Item() {

  return (
    <Link className ={style.link} to="/productDetail"><div className={style.card}>
      <div className={style.img}>
        <img src="/Images/collections/p_img3.png" alt="" />
      </div>
      <p className={style.title}>Title</p>
      <span className={style.price}>$ 40</span>
    </div>
    </Link>
  )
}
