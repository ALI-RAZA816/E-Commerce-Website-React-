import style from '../Support/Support.module.css'

export default function Support() {
  return (
    <div className={style.supportSection}>
      <div className={style.container}>
        <div>
            <img src="/Images/icons/Vector.png" alt="" />
            <h3>Easy Exchange Policy</h3>
            <p>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src="/Images/icons/quality_icon.png" alt="" />
            <h3>7 Days Return Policy</h3>
            <p>We provide 7 days free return policy </p>
        </div>
        <div>
            <img src="/Images/icons/support_img.png" alt="" />
            <h3>Best Customer Support</h3>
            <p>We provide 24/7 customer support</p>
        </div>
      </div>
    </div>
  )
}
