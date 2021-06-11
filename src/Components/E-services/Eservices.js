import React from 'react';
import './Eservices.scss';
import { ImTruck, ImHome, ImLock } from 'react-icons/im';

export default function Eservices() {
    return (
       <>
            <div className="Eservices">
                <div className="col-lg-8 mx-auto Eservice_wrapper">
                    <div className="col-lg-12 wrapper_inner">
                        <div className="inner_left">
                            <ImTruck className="icon"/>
                            <h4>Fast delivery</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.</p>
                        </div>
                        <div className="inner_middle">
                            <ImHome className="icon"/>
                            <h4>Creative Stergity</h4>
                            <p>It is a long established fact that a reader will be distracted by the 
                                readable content of a page. </p>
                        </div>
                        <div className="inner_right">
                            <ImLock  className="icon"/>
                            <h4>High Secure</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.</p>
                        </div>
                    </div>

                </div>

            </div>
       </>
    )
}
