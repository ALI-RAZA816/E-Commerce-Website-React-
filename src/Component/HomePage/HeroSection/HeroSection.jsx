import style from '../HeroSection/HeroSection.module.css';

export default function HeroSection() {
  return (
    <div className={style.heroSection}>
        <div className={style.heroContainer}>
            <div className={style.leftBox}>
                <span>Our Bestsellers</span>
                <h1>Latest Arrivals</h1>
                <span>Shop Now</span>
            </div>
            <div className={style.rightBox}>
                <img src="/Images/file 1.png" alt="" />
            </div>
        </div>
    </div>
  )
}
