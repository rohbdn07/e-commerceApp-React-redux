import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { axiosInstance } from "../../servicesAPI/axios";
import "./purchase.scss";

export default function Purchase() {
  const { selectedItems } = useSelector((state) => state.productReducer);

  const checkout = async () => {
    try {
      const { data } = await axiosInstance.post("/api/create-checkout-session", { dataFromClient: selectedItems });

      console.log("the data saved to server", data.url);
      console.log("the session data are", data.session);
      if (data.url) {
        window.location = data.url
      }
    } catch (error) {
      console.log("there is an error", error);
      alert('there is an error')  //TODO: change this to react tostify to alert the User
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
            <button onClick={checkout} className="btn btn-primary">
              Checkout
              <span>
                <GrNext className="nexticon" />
              </span>
            </button>
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
