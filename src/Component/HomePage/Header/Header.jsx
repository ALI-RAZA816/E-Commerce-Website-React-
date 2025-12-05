
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import style from '../Header/Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <img src="/Images/logo.png" alt="" />
        </div>
        <div className={style.links}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Collection</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
        <div className="icons" style={{display:'flex',alignItems:'center'}}>
            <IoSearch style={{fontSize:'20px',marginRight:'.5rem'}} />
            <FaUser style={{fontSize:'20px',marginRight:'.5rem'}}  />
            <LuShoppingCart style={{fontSize:'20px',marginRight:'.5rem'}}  />
        </div>
    </header>
  )
}
