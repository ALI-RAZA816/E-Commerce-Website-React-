import style from '../Subscription/Subscription.module.css'

export default function Subscription() {
    return (
        <div className={style.subscription}>
            <div>
                <h1>Subscribe now & get 20% off</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className={style.subscriptionField}>
                <input type="text" placeholder='Enter your email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
