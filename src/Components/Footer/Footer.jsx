import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className=''>

        <div className={style["footer"]}>
           <div className="row">
            <div className="col-md-4">
             <h1>LOCATION</h1>               
          <p>2215 John Daniel Drive</p>
         <span>Clark, MO 65243</span>




            </div>
              <div className="col-md-4">
             <h1>AROUND THE WEB</h1>               
         <div className="icons">
            <ul className={style["icons"]}>
                <li className={style["icon-circle"]}> <i class="fa-brands fa-facebook"></i></li>
                <li className={style["icon-circle"]} ><i class="fa-brands fa-twitter"></i></li>
                <li className={style["icon-circle"]} ><i class="fa-brands fa-linkedin-in"></i></li> 
                <li  className={style["icon-circle"]}><i class="fa-solid fa-globe"></i></li>
            </ul>
         </div>



            </div>
              <div className="col-md-4">
             <h1> ABOUT FREELANCER</h1>               
          <p>Freelance is a free to use, licensed Bootstrap theme created </p>
         <span>by Route</span>




            </div>
           </div>
        </div>

      <div className="text justify-content-center align-items-center text-center p-2 bg-dark">
        <h4 className='text-white'>Copyright © Your Website 2021</h4>
      </div>
    </div>
  )
}
