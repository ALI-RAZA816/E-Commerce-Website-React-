import { useContext } from 'react';
import style from '../SearchBar/SearchBar.module.css';
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import contextProvider from '../../assets/ContextProvider/ContextStore';

export default function SearchBar() {

    // context
    const {search} = useContext(contextProvider);
    const {searchHandler} = useContext(contextProvider);
    const {hideSearchBar} = useContext(contextProvider);

    return (
        <div className={`${style.searchContainer} ${search === true && style.active}`}>
            <div className={style.field}>
                <div className={style.inputField}>
                    <input type="text" onChange={searchHandler} placeholder='Search' />
                    <IoSearch style={{fontSize:'1.2rem',cursor:'pointer'}} />
                </div>
                <RxCross2 onClick={hideSearchBar} style={{fontSize:'1.5rem',marginLeft:'1rem',cursor:'pointer'}} />
            </div>
        </div>
    )
}
