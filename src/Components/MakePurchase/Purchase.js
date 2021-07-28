import React from 'react';
import { Link } from 'react-router-dom';
import { GrPrevious, GrNext } from 'react-icons/gr';
import { FaTruck } from 'react-icons/fa';


import './purchase.scss';

export default function Purchase() {
    return (
        <>
            <div className="purchase">
                <div className="purchase_wrapper">
                    <div className="purchase_left">
                      <Link to="/"><button className="btn btn-outline-secondary"><span><GrPrevious /></span>Continue shopping</button></Link> 
                    </div>
                    <div className="purchase_right">
                    <button className="btn btn-primary">Make Purchase<span><GrNext className="nexticon" /></span></button>
                    </div>
                </div>
                <div className="alert purchase_delievery">
                    <p><span><FaTruck /></span>Free Delivery within 1-2 weeks</p>
                </div>
            </div>
        </>
    )
}
