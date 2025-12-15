import { IoStarSharp } from "react-icons/io5";
import style from '../ProductDetail/TopSection.module.css';
import { useContext } from "react";
import contextProvider from "../../assets/ContextProvider/ContextStore";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../Store/bagSlice";


export default function TopSection() {
    const dispatch = useDispatch();
    const {title} = useContext(contextProvider);
    const {image} = useContext(contextProvider);
    const {price} = useContext(contextProvider);
    const {sizes} = useContext(contextProvider);
    const {Index} = useContext(contextProvider);
    const homeProducts = useSelector((store) => store.homeProducts);
    const addToBag = () => {
        const cartItem = homeProducts[Index];
        dispatch(bagActions.addtoBagItems(cartItem));
    }
    return (
        <div>
            <div className={style.imageGrid}>
                <div className={style.left}>
                    <div className={style.relatedimages}>
                        <div><img src='/Images/collections/p_img3.png' alt="" /></div>
                        <div><img src='/Images/collections/p_img3.png' alt="" /></div>
                        <div><img src='/Images/collections/p_img3.png' alt="" /></div>
                        <div><img src='/Images/collections/p_img3.png' alt="" /></div>
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
                            {sizes?.map((item,index) =>{
                                return <span key={index}>{item}</span>
                            })}
                        </div>
                        <button onClick={addToBag}>Add to cart</button>
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
