import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./totalprice.scss";
import { FaCcVisa, FaPaypal, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { getTotalItemPrice } from "../../Redux/Action/getTotalPrice";

export default function TotalPrice() {
  const [discount, Setdiscount] = useState(10);
  const { totalPrice, selectedItems } = useSelector(
    (state) => state.productReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchToralPrice();
  }, [selectedItems]);

  function fetchToralPrice() {
    dispatch(getTotalItemPrice());
  }

  console.log("the total amoutn", totalPrice);
  return (
    <>
      <div className="get_discount">
        <p>Get discount only above 100 $</p>
      </div>
      <div className="totalprice">
        <div className="totalprice_wrapper">
          <div className="totalrate">
            <p>Total Price:</p>
            <span>
              USD
              {selectedItems.length !== 0 ? totalPrice : <span>0</span>}
            </span>
          </div>
          <div className="discount_rate">
            <p>Discount:</p>
            <span>{discount}%</span>
          </div>
          <div className="grand_total">
            <p>Total:</p>
            <span>
              $
              {selectedItems.length !== 0 && totalPrice && totalPrice > 100 ? (
                (totalPrice - (discount / 100) * totalPrice).toFixed(2)
              ) : (
                <span>{totalPrice}</span>
              )}
            </span>
          </div>
        </div>
        <hr />
        <div className="payment_cards container">
          <FaCcVisa />
          <FaPaypal />
          <FaCcMastercard />
          <SiAmericanexpress />
        </div>
      </div>
    </>
  );
}
