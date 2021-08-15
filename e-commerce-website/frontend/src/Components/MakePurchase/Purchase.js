import React, { useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { axiosInstance } from "../../servicesAPI/axios";
import "./purchase.scss";

export default function Purchase() {
  const { selectedItems } = useSelector((state) => state.productReducer);
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.post(
        "/api/create-checkout-session",
        { dataFromClient: selectedItems }
      );

      console.log("the data saved to server", data.url);
      console.log("the session data are", data.session);
      if (!loading && data.url) {
        window.location = data.url;
      }
    } catch (error) {
      console.log("there is an error", error);
      alert("there is an error"); //TODO: change this to react tostify to alert the User
    }
  };

  return (
    <>
      <div className="purchase">
        <div className="purchase_wrapper">
          <div className="purchase_left">
            <Link to="/">
              <button className="btn btn-outline-secondary">
                <span>
                  <GrPrevious />
                </span>
                Continue shopping
              </button>
            </Link>
          </div>
          <div className="purchase_right">
            {!loading ? (
              <button onClick={checkout} className="btn btn-primary">Checkout</button>
            ) : (
              <span
                className="spinner-border text-primary spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
          </div>
        </div>
        <div className="alert purchase_delievery">
          <p>
            <span>
              <FaTruck />
            </span>
            Free Delivery within 1-2 weeks
          </p>
        </div>
      </div>
    </>
  );
}
