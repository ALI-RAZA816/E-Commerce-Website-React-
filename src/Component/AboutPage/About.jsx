import React from 'react'
import style from '../AboutPage/About.module.css';
import HeroSection from './HeroSection';
import Choose from './Choose';
import Subscription from '../HomePage/Subscription/Subscription';
export default function About() {
  return (
    <div>
        <div className={style.aboutContainer} style={{margin:'3rem 0'}}>
            <h1>About <span>Us</span></h1>
            <HeroSection/>
            <Choose/>
            <Subscription/>
        </div>
    </div>
  )
}
