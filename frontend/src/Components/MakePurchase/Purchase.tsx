import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { useCheckoutAPI } from "../../servicesAPI/Checkout/checkoutAPI";
import "./purchase.scss";
import { RootState } from "../../Redux/Reducer";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import { accountInitialValues } from "../Auth/Helpers/account/Toggle";

export default function Purchase(): JSX.Element {
   const { selectedItems }: any = useSelector(
      (state: RootState) => state.productReducer
   );

   const [open, setOpen] = React.useState(false);

   const [account, toggleAccount] = React.useState(accountInitialValues.login);

   //use of custome hook
   const [loading, callCheckoutAPI] = useCheckoutAPI(selectedItems);

   // const openDialog = () => {
   //    setOpen(true);
   // };

   //toggle between login and register form
   const toggleSignup = () => {
      toggleAccount(accountInitialValues.signup);
   };

   const toggleLogin = () => {
      toggleAccount(accountInitialValues.login);
   };

   function checkoutSubmit() {
      const user = localStorage.getItem("user");
      if (user) {
         callCheckoutAPI();
      } else {
         setOpen(true);
      }
   }

   return (
      <>
         {account.view === "login" && open ? (
            <Login
               toogleRegister={toggleSignup}
               open={open}
               setOpen={setOpen}
            />
         ) : (
            <Register toogleLogin={toggleLogin} open={open} setOpen={setOpen} />
         )}
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
                     <button
                        onClick={checkoutSubmit}
                        className={
                           selectedItems.length <= 0
                              ? "visually-hidden"
                              : "btn btn-warning"
                        }
                     >
                        Checkout
                     </button>
                  ) : (
                     <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
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
