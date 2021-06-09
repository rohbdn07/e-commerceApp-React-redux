import React from 'react'
import './Topbar.scss'

export default function Topbar() {
    return (
        <> 
            <div className="topbar">
                <div className="col-lg-8 col-md-11 col-sm-12 topbar_wrapper">
                    <div className="top_left">
                        <ul>
                            <li>Home</li>
                            <li>Delivery</li>
                            <li>Payment</li>
                        </ul>
                    </div>
                    <div className="top_right">
                        <ul>
                            <li>Call:+35845721352</li>
                            <li>
                                <select name="language">
                                    <option value="English">English</option>
                                    <option value="Finnish">Finnish</option>
                                </select>
                            </li>
                        </ul>

                    </div>

                </div>
               
            </div>
        </>
       
    )
}
