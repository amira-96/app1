import React from 'react'
import style from './Home.module.css'
import Images from '../../assets/Images/avataaars.svg'
export default function Home() {
  return (
    <div className={style["home"]}>
      <div className={style["imag"]}>
        <img src={Images} alt="" />
      </div>

      <div>
        <h1>start Framework</h1>
        <span><i class="fa-solid fa-star"></i></span>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>

    </div>

  
  )
}
