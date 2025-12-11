import { useDispatch, useSelector } from 'react-redux';
import style from '../Collection/Item.module.css';
import {
  Link
} from "react-router-dom";
import { useContext } from 'react';
import contextProvider from '../../../assets/ContextProvider/ContextStore';
export default function Item({img, title, price}) {
  const {imgHandler} = useContext(contextProvider);
  return (
    <Link onClick={() => imgHandler(img,title,price)} className ={style.link} to="/productDetail"><div className={style.card}>
      <div className={style.img}>
        <img src={img} alt="" />
      </div>
      <p className={style.title}>{title}</p>
      <span className={style.price}>$ {price}</span>
    </div>
    </Link>
  )
}
