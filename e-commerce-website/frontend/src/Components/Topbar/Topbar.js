import React from "react";
import { Link } from "react-router-dom";
import { GrFormPrevious } from "react-icons/gr";
import "./Topbar.scss";

export default function Topbar(props) {
  const { shopping } = props;
  return (
    <>
      <div className="topbar">
        <div className="col-lg-8 col-md-11 col-sm-12 topbar_wrapper">
          <div className="top_left">
            {shopping ? (
              <ul>
                <Link to="/">
                  {" "}
                  <li className="previous">
                    <GrFormPrevious style={{ width: "30" }} size="1x" />
                    {shopping}
                  </li>
                </Link>
              </ul>
            ) : (
              <ul>
                <li>Home</li>
                <li>Delivery</li>
                <li>Payment</li>
              </ul>
            )}
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
  );
}
