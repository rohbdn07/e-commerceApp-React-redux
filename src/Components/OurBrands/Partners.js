import React from 'react';
import './Partners.scss';
export default function Partners(props) {

    const {image, text} = props
    return (
       <>
            <div className="partners">
                <div className="partners_wrapper">
                    <div className="card" style={{width:"10rem", height:"8rem"}}>
                        <img src={image} className="card-img-top" alt="brandImage" />
                        <div className="card-body mx-auto">
                            <p>{text}</p>
                        </div>
                    </div>

                </div>
            </div>
       </>
    )
}
