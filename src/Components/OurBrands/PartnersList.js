import React from 'react';
import Partners from './Partners';
import {brands} from '../../Brands';
import '../OurBrands/Partners.scss';

export default function PartnersList() {
    console.log('the brands are', brands)
    return (
        <>
            <div className="partnerList">
                <div className="col-lg-8 mx-auto partnerList_wrapper">
                    <h2>Our Brands</h2>
                    <div className="partner_row">
                    { brands && brands.map((item)=> {
                    return (
                        <Partners image={item.image} text={item.text}/>
                    )
                })}  
                    </div>
                
                </div>
            </div>
        </>
    )
}
