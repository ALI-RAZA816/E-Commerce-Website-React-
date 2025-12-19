import style from '../Collection/Item.module.css';

export default function Item({title,image,price}) {
  
  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={image} alt="" />
      </div>
      <p className={style.title}>{title}</p>
      <span className={style.price}>$ {price}</span>
    </div>
  )
}
