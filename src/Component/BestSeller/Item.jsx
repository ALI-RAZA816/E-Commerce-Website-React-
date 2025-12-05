import style from '../BestSeller/Item.module.css';
export default function Item({img, title ,price}) {
    return (
        <div className={style.card}>
            <div className={style.img}>
                <img src={img} alt="" />
            </div>
            <p className={style.title}>{title}</p>
            <span className={style.price}>$ {price}</span>
        </div>
    );
}
