import style from '../Cart/PaymentMethod.module.css';

export default function PaymentMethod() {
    return (
        <div>
            <div className={style.Paymentmethod}>
                <h3>Payment <span>Method</span></h3>
                <div className={style.methods}>
                    <div className={style.method1}>
                        <input type="radio" id='strips' name='method' />
                        <label htmlFor="strips"><img src="/Images/paymethod/stripe_logo.png" alt="" /></label>
                    </div>
                    <div className={style.method2}>
                        <input style={{marginRight:"1rem"}} type="radio" id='razorpay' name='method' />
                        <label htmlFor="razorpay"><img src="/Images/paymethod/razorpay_logo.png" alt="" /></label>
                        
                    </div>
                    <div className={style.method3}>
                        <input type="radio" id='cashondelivery' name='method' />
                        <label htmlFor='cashondelivery'>Cash on delivery</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
