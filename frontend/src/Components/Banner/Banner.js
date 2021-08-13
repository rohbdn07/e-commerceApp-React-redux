import React from 'react';
import './Banner.scss';

export default function Banner() {
    return (
        <>
            <div id="carouselExampleCaptions" className="col-lg-8 mx-auto my-4 rounded-2 carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded-3">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="clotheImage" />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h2>Hurry up! for discounted price</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="clotheImage" />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h2>Select your own choices</h2>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="clotheImage" />
                        {/* <div className="carousel-caption d-none d-md-block">
                            <h2>Big SALE!!! Don't miss it</h2>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
