import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import style from '../Header/Header.module.css';
import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import {
  Link
} from "react-router-dom";


export default function Header({NavLinksHandler,removeLinksHandler, showNavlinks}) {
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
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
        <div className="icons" style={{display:'flex',alignItems:'center'}}>
            <IoSearch style={{fontSize:'23px',marginRight:'.8rem'}} />
            <FaUser style={{fontSize:'23px',marginRight:'.8rem'}}  />
            <LuShoppingCart style={{fontSize:'23px',marginRight:'.8rem'}} />
            <HiOutlineBars3BottomRight onClick={NavLinksHandler} className={style.bars} />
        </div>
    </header>
  )
}
