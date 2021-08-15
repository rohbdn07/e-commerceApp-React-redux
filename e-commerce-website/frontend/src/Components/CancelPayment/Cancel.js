import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import FooterEnd from "../Footer/FooterEnd";
import { GiCancel } from "react-icons/gi";
import "./cancel.scss";

const Cancelled = ({ history }) => {
  const [shopping, setShopping] = useState("back to Shopping");
  return (
    <>
      <Topbar shopping={shopping} history={history} />
      <div className="text-center success">
        <p className="mb-5 text-warning">Opps!! Payment failed...</p>
        <h3>Payment was not successfull</h3>
        <GiCancel style={{ width: "250", color: "whitesmoke" }} size="lg" />
      </div>
      <div className="col-lg-8 col-sm-11 container">
        <FooterEnd />
      </div>
    </>
  );
};

export default withRouter(Cancelled);
