import React from 'react'
import Summary from '../Cart/Summary'
import style from '../DeliveryPage/Delivery.module.css';
export default function Delivery() {
    return (
        <div className={style.deliveryContainer}>
            <div className={style.form}>
                <h1>Delivery <span>Information</span></h1>
                <form action="">
                    <div>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>
                    <div>
                        <input type="email" placeholder='Email' />
                    </div>
                    <div>
                        <input type="text" placeholder='Street' />
                    </div>
                    <div>
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div>
                        <input type="text" placeholder='Zip Code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <div>
                        <input type="tel" placeholder='Phone' />
                    </div>
                </form>
            </div>
            <div>
                <Summary />
            </div>
        </div>
    )
}
