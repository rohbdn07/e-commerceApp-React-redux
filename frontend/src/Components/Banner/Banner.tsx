import React from "react";
import "./Banner.scss";

export default function Banner() {
   return (
      <>
         <div
            id="carouselExampleCaptions"
            className="col-lg-8 mx-auto my-4 rounded-2 carousel slide"
            data-bs-ride="carousel"
         >
            <div className="carousel-indicators">
               <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
               ></button>
               <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
               ></button>
               <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
               ></button>
               <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
               ></button>
            </div>
            <div className="carousel-inner rounded-3">
               <div className="carousel-item active">
                  <img
                     src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                     className="d-block w-100"
                     alt="clotheImage"
                  />
                  <div className="carousel-caption d-none d-md-block">
                     <h2>
                        <span>Big SALE!!!</span> Don't miss it
                     </h2>
                     <p>Buy now and get big discount on our products.</p>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                     className="d-block w-100"
                     alt="clotheImage"
                  />
                  <div className="carousel-caption d-none d-md-block">
                     <h2>
                        <span>Hurry up!</span> for discounted price
                     </h2>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                     className="d-block w-100"
                     alt="clotheImage"
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                            <h2>Select your own choices</h2>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
               </div>

               <div className="carousel-item">
                  <img
                     src="https://ktla.com/wp-content/uploads/sites/4/2021/04/AP20150768746766.jpg"
                     className="d-block w-100"
                     alt="clotheImage"
                  />
                  {/* <div className="carousel-caption d-none d-md-block">
                     <h2>Select your own choices</h2>
                     <p>
                        Some representative placeholder content for the second
                        slide.
                     </p>
                  </div> */}
               </div>
            </div>
            <button
               className="carousel-control-prev"
               type="button"
               data-bs-target="#carouselExampleCaptions"
               data-bs-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button
               className="carousel-control-next"
               type="button"
               data-bs-target="#carouselExampleCaptions"
               data-bs-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>
      </>
   );
}
