import React from "react";
import "./Protfolio.css";
import Images from "../../assets/Images/poert1.png";
import images from "../../assets/Images/port2.png";
import Image from "../../assets/Images/port3.png";

export default function Protfolio() {
  return (
    <div className="protfolio">
      <h1>about component</h1>
      <span>
        <i class="fa-solid fa-star"></i>
      </span>
      <div className="container">
        <div className="row g-5">

          <div className="col-md-4">
            <div class="inner position-relative" data-bs-toggle="modal"data-bs-target="#exampleModal" >
              <img src={Images} alt="" className="d-block w-100" />

              <div class="layer d-flex justify-content-center align-items-center flex-column position-absolute top-0 start-0 end-0 bottom-0">
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </div>
            </div>
    {/* modal */}
            <div className="modal fade"id="exampleModal"tabindex="-1"  aria-labelledby="exampleModalLabel"aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-body">
                    <img src={Images} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="inner position-relative" data-bs-toggle="modal"data-bs-target="#2.jpg" >
              <img src={images} alt="" className="d-block w-100" />

              <div class="layer d-flex justify-content-center align-items-center flex-column position-absolute top-0 start-0 end-0 bottom-0">
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </div>
            </div>
    {/* modal */}
            <div className="modal fade"id="2.jpg"tabindex="-1"  aria-labelledby="exampleModalLabel"aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">

                  <div class="modal-body">
                    <img src={images} alt="" className="d-block w-100" />
                  </div>
                
              </div>
            </div>
          </div>
           <div className="col-md-4">
            <div class="inner position-relative" data-bs-toggle="modal"data-bs-target="#3.jpg" >
              <img src={Image} alt="" className="d-block w-100" />

              <div class="layer d-flex justify-content-center align-items-center flex-column position-absolute top-0 start-0 end-0 bottom-0">
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </div>
            </div>
    {/* modal */}
            <div className="modal fade"id="3.jpg"tabindex="-1"  aria-labelledby="exampleModalLabel"aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-body">
                    <img src={Image} alt="" className="d-block w-100" />
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="inner position-relative" data-bs-toggle="modal"data-bs-target="#exampleModal" >
              <img src={Images} alt="" className="d-block w-100" />

              <div class="layer d-flex justify-content-center align-items-center flex-column position-absolute top-0 start-0 end-0 bottom-0">
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </div>
            </div>
    {/* modal */}
            <div className="modal fade"id="exampleModal"tabindex="-1"  aria-labelledby="exampleModalLabel"aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-body">
                    <img src={Images} alt="" className="d-block w-100" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="inner position-relative" data-bs-toggle="modal"data-bs-target="#2.jpg" >
              <img src={images} alt="" className="d-block w-100" />

              <div class="layer d-flex justify-content-center align-items-center flex-column position-absolute top-0 start-0 end-0 bottom-0">
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </div>
            </div>
    {/* modal */}
            <div className="modal fade"id="2.jpg"tabindex="-1"  aria-labelledby="exampleModalLabel"aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">

                  <div class="modal-body">
                    <img src={images} alt="" className="d-block w-100" />
                  </div>
                
              </div>
            </div>
          </div>
           <div className="col-md-4">
            <div class="inner position-relative" data-bs-toggle="modal"data-bs-target="#3.jpg" >
              <img src={Image} alt="" className="d-block w-100" />

              <div class="layer d-flex justify-content-center align-items-center flex-column position-absolute top-0 start-0 end-0 bottom-0">
                <i class="fa-solid fa-xmark fa-2xl"></i>
              </div>
            </div>
    {/* modal */}
            <div className="modal fade"id="3.jpg"tabindex="-1"  aria-labelledby="exampleModalLabel"aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-body">
                    <img src={Image} alt="" className="d-block w-100" />
                  </div>
                
              </div>
            </div>
          </div>

         




          

        </div>
      </div>
    </div>
  );
}
