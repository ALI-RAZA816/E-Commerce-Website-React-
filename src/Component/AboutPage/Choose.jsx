import style from '../AboutPage/Choose.module.css'

export default function Choose() {
  return (
    <div className={style.chooseSection}>
      <h1>Why <span>Choose Us</span></h1>
      <div className={style.gridContainer}>
        <div>
            <span>Quality Assurance</span>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div>
            <span>Convenience</span>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div>
            <span>Exceptional Customer Service:</span>
            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
    </div>
  )
}
