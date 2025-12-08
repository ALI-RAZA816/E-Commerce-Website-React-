import style from '../ContactPage/ContactHero.module.css';

export default function ContactHero() {
    return (
        <div className={style.contactHero}>
            <div>
                <img src="/Images/contact_img.png" alt="" />
            </div>
            <div>
                <div style={{marginBottom:'1.5rem'}}>
                    <h1>Our Store</h1>
                    <span style={{marginBottom:'.3rem'}}>54709 Willms Station </span>
                    <span>Suite 350, Washington, USA</span>
                </div>
                <div style={{marginBottom:'1.5rem'}}>
                    <span style={{marginBottom:'.3rem'}}>Tel: (415) 555‑0132</span>
                    <span>Email: greatstackdev@gmail.com</span>
                </div>
                <div>
                    <h1>Careers at Forever</h1>
                    <span>Learn more about our teams and job openings.</span>
                </div>
                <button>Explore Jobs</button>
            </div>
        </div>
    )
}
