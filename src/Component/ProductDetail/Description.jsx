import React from 'react'
import DescContent from './DescContent';
import style from '../ProductDetail/Description.module.css'

export default function Description() {
  return (
    <div style={{margin:'6rem 0'}}>
      <div className={style.buttons}>
        <button>Description</button>
        <button>Reviews(122)</button>
      </div>
      <div className={style.content}>
        <DescContent />
      </div>
    </div>
  )
}
