import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import style from '../Header/Header.module.css';
import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import {
  Link
} from "react-router-dom";
import { useContext } from "react";
import contextProvider from "../../../assets/ContextProvider/ContextStore";



export default function Header() {

  const {NavLinksHandler} = useContext(contextProvider);
  const {removeLinksHandler} = useContext(contextProvider);
  const {showNavlinks} = useContext(contextProvider);
  const {showSearchBar} = useContext(contextProvider);
  const {cartItem} = useContext(contextProvider);

  return (
    <header className={style.header}>
        <div className={style.logo}>
            <img src="/Images/logo.png" alt="" />
        </div>
        <div className={`${style.links} ${showNavlinks === true && style.active}`}>
            <span onClick={removeLinksHandler}><FaAngleLeft/> Back</span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/collection">Collection</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="icons" style={{display:'flex',alignItems:'center'}}>
            <IoSearch onClick={showSearchBar} style={{fontSize:'23px',marginRight:'.8rem',cursor:'pointer'}} />
            <FaUser style={{fontSize:'23px',marginRight:'.8rem'}}  />
            <Link style={{color:'#333',positon:'relative'}}  to="/cart"><span className={style.lengthNumber}>{cartItem.length}</span><LuShoppingCart style={{fontSize:'23px',marginRight:'.8rem'}} /></Link>
            <HiOutlineBars3BottomRight onClick={NavLinksHandler} className={style.bars} />
        </div>
    </header>
  )
}
