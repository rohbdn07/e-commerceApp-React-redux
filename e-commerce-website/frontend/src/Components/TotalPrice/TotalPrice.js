import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./totalprice.scss";
import { FaCcVisa, FaPaypal, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { getTotalItemPrice } from "../../Redux/Action/getTotalPrice";

export default function TotalPrice() {
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
  return (
    <>
      <div className="totalprice">
        <div className="totalprice_wrapper">
          <div className="totalrate">
            <p>Total Price:</p>
            <span>
              USD{" "}
              {selectedItems.length !== 0 ? (
                Math.round(totalPrice)
              ) : (
                <span>0</span>
              )}
            </span>
          </div>
          <div className="discount_rate">
            <p>Discount:</p>
            <span>USD 50</span>
          </div>
          <div className="grand_total">
            <p>Total:</p>
            <span>
              ${" "}
              {selectedItems.length !== 0 && totalPrice ? (
                Math.round(totalPrice) - 50
              ) : (
                <span>0</span>
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
