import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import FooterEnd from "../Footer/FooterEnd";
import { AiOutlineLike } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import "./success.scss";

const Success = ({ history }) => {
   const [shopping, setShopping] = useState("back to Shopping");
   return (
      <>
         <Topbar shopping={shopping} history={history} />
         <div className="text-center success">
            <p className="mb-5 text-warning">Congratulations....</p>
            <h3>Thank you for your purchase.</h3>
            <h6>
               Please check your email
               <MdEmail style={{ width: "20", color: "white" }} size="lg" />. We
               will shortly send you the purchase's receipt.
            </h6>
            <AiOutlineLike
               className="success_icon"
               style={{ width: "250", color: "whitesmoke" }}
               size="lg"
            />
         </div>
         <div className="col-lg-8 col-sm-11 container">
            <FooterEnd />
         </div>
      </>
   );
};

export default withRouter(Success);
