import React from 'react';
import './totalprice.scss';
import { FaCcVisa,FaPaypal,FaCcMastercard } from 'react-icons/fa';
import { SiAmericanexpress} from 'react-icons/si';



export default function TotalPrice() {
    return (
       <>
              <div className="totalprice">
                <div className="totalprice_wrapper">
                    <div className="totalrate">
                        <p>Total Price:</p>
                        <span>USD 150</span>
                    </div>
                    <div className="discount_rate">
                        <p>Discount:</p>
                        <span>USD 50</span>
                    </div>
                    <div className="grand_total">
                        <p>Total:</p>
                       <span>$1530</span>
                    </div>
                </div>
                <hr />
                <div className="payment_cards">
                    <FaCcVisa />
                    <FaPaypal />
                    <FaCcMastercard />
                    <SiAmericanexpress />
                </div>
            </div>
       </>
    )
}
