import { IoStarSharp } from "react-icons/io5";
import style from '../ProductDetail/TopSection.module.css';
import { useContext} from "react";
import contextProvider from "../../assets/ContextProvider/ContextStore";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../../Store/bagItems";



export default function TopSection() {

    const dispatch = useDispatch();
    const {Img} = useContext(contextProvider);
    const {Price} = useContext(contextProvider);
    const {Title} = useContext(contextProvider);
    const {Id} = useContext(contextProvider);
    const {ItemIndex} = useContext(contextProvider);
    const bagItems = useSelector((store) => store.bagItems);
    const homeProducts = useSelector((store) => store.homeProducts);
    
    
    const ADDtoBag = ()=>{
        dispatch(bagActions.addToBag(homeProducts[ItemIndex]));
    }
    return (
        <div>
            <div className={style.imageGrid}>
                <div className={style.left}>
                    <div className={style.relatedimages}>
                        <div><img src={Img} alt="" /></div> 
                        <div><img src={Img} alt="" /></div>
                        <div><img src={Img} alt="" /></div>
                        <div><img src={Img} alt="" /></div>
                    </div>
                    <div className={style.productImage}>
                        <img src={Img} alt="" />
                    </div>
                </div>
                <div className={style.right}>
                    <h1>{Title}</h1>
                    <div className="ratings">
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span><IoStarSharp style={{marginRight:'.5rem',color:'#FF532E',fontSize:''}} /></span>
                        <span style={{color:'#1C1C1C',fontSize:'16px'}}>(122)</span>
                    </div>
                    <div className={style.price}>
                        <h1>$ {Price}</h1>
                        <p>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
                    </div>
                    <div className={style.size}>
                        <h3>Select Size</h3>
                        <div className={style.sizesNumber}>
                            <span>S</span> 
                            <span>M</span> 
                            <span>X</span> 
                            <span>XL</span> 
                            <span>XXL</span> 
                        </div>
                        <button onClick={ADDtoBag}>Add to cart</button>
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
