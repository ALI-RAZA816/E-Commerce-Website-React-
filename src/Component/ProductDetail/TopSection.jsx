import { IoStarSharp } from "react-icons/io5";
import style from '../ProductDetail/TopSection.module.css';
import { useContext } from "react";
import contextProvider from "../../assets/ContextProvider/ContextStore";

export default function TopSection() {
    const {title} = useContext(contextProvider);
    const {price} = useContext(contextProvider);
    const {image} = useContext(contextProvider);
    const {sizes} = useContext(contextProvider);
    const {changeImageHandler} = useContext(contextProvider);
    const {quantityHandler} = useContext(contextProvider);
    const {otherImages} = useContext(contextProvider);
    const {activeSize} = useContext(contextProvider);
    const {ADDTOCARTHandler} = useContext(contextProvider);
    const {sizeHandler} = useContext(contextProvider);
    return (
        <div>
            <div className={style.imageGrid}>
                <div className={style.left}>
                    <div className={style.relatedimages}>
                        {otherImages?.map((item, index) =>{
                            return <div key={index} onClick={() => changeImageHandler(item)}><img src={item} alt="" /></div>
                        })}
                    </div>
                    <div className={style.productImage}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className={style.right}>
                    <h1>{title}</h1>
                    <div className="ratings">
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span style={{color:'#1C1C1C',fontSize:'16px'}}>(122)</span>
                    </div>
                    <div className={style.price}>
                        <h1>$ {price}</h1>
                        <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                    </div>
                    <div className={style.size}>
                        <h3>Select Size</h3>
                        <div className={style.sizesNumber}>
                            {sizes?.map((item,index)=>{
                                return <span key={index} className={activeSize === item ? style.activeBorder : undefined} onClick={() => sizeHandler(item)}>{item}</span>
                            })}
                        </div>
                        <input type="number" onChange={quantityHandler} min={1} placeholder='1' />
                        <button onClick={ADDTOCARTHandler}>Add to cart</button>
                    </div>
                    <ul>
                        <li>100% Original product.</li>
                        <li>Cash on delivery is available on this product.</li>
                        <li>Easy return and exchange policy within 7 days.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
