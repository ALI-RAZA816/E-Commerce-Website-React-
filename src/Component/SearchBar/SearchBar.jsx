import style from '../SearchBar/SearchBar.module.css';
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function SearchBar() {
    return (
        <div className={style.searchContainer}>
            <div className={style.field}>
                <div className={style.inputField}>
                    <input type="text" placeholder='Search' />
                    <IoSearch style={{fontSize:'1.2rem'}} />
                </div>
                <RxCross2 style={{fontSize:'1.5rem',marginLeft:'1rem',cursor:'pointer'}} />
            </div>
        </div>
    )
}
