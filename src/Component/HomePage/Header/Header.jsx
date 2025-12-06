import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import style from '../Header/Header.module.css';
import { FaAngleLeft } from "react-icons/fa6";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";



export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <img src="/Images/logo.png" alt="" />
        </div>
        <div className={style.links}>
            <span><FaAngleLeft /> Back</span>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Collection</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
        <div className="icons" style={{display:'flex',alignItems:'center'}}>
            <IoSearch style={{fontSize:'23px',marginRight:'.8rem'}} />
            <FaUser style={{fontSize:'23px',marginRight:'.8rem'}}  />
            <LuShoppingCart style={{fontSize:'23px',marginRight:'.8rem'}}  />
            <HiOutlineBars3BottomRight className={style.bars} />
        </div>
    </header>
  )
}
