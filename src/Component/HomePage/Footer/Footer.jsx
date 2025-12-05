import style from '../Footer/Footer.module.css';
export default function Footer() {
    return (
        <>
            <div className={style.footerContainer}>
                <div>
                    <img src="/Images/logo.png" alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div>
                    <h1>Company</h1>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Delivery</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h1>Get in touch</h1>
                    <span>+123-456-789</span>
                    <p>example@gmail.com</p>
                </div>
            </div>
            <div className={style.copyright}>
                <p>Copyright 2024 © GreatStack.dev - All Right Reserved.</p>
            </div>
        </>
    )
}
