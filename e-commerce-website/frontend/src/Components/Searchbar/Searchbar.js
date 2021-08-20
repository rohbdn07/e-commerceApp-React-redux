import React from "react";
import { useLocation } from "react-router-dom";
import "./Searchbar.scss";

export default function Searchbar() {
   const location = useLocation();
   return (
      <>
         {location.pathname === "/shopping-cart" ? null : (
            <div className="searchbar">
               <div className="searchbar_wrapper">
                  <div className="mx-auto searchbar_middle">
                     <div className="search_input">
                        <form className="d-flex">
                           <input
                              class="form-control me-1"
                              type="search"
                              placeholder="Search"
                              aria-label="Search"
                           />
                           <button
                              class="btn btn-outline-primary"
                              type="submit"
                           >
                              Search
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
