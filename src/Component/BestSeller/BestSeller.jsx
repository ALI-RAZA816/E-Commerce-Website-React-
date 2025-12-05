import React from 'react'
import style from '../BestSeller/BestSeller.module.css';
import Item from '../BestSeller/Item';
export default function BestSeller() {
     const collectionProduct = [
        {
            img:'/Images/collections/Rectangle 3608.png',
            title:'Women Round Neck Cotton Top',
            price:'149'
        },
        {
            img:'/Images/collections/Rectangle 3609.png',
            title:'Women Round Neck Cotton Top',
            price:'40'
        },
        {
            img:'/Images/collections/Rectangle 3619.png',
            title:'Women Round Neck Cotton Top',
            price:'40'
        },
        {
            img:'/Images/collections/Rectangle 3611.png',
            title:'Men Round Neck Pure Cotton T-shirt',
            price:'46'
        },
        {
            img:'/Images/collections/Rectangle 3635.png',
            title:'Men Round Neck Pure Cotton T-shirt',
            price:'26'
        },
     ]
    return (
        <div className={style.BestSeller}>
            <h1>Best <span>Seller</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            <div className={style.products}>
                {collectionProduct.map((item, index) =>{
                    return <Item key = {index} img = {item.img} title = {item.title} price = {item.price}/> 
                })}
            </div>
        </div>
    )
}
