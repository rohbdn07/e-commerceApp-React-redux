import React from "react";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import "./Menubar.scss";

export default function Menubar() {
   const location = useLocation();
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light border border-bottom-1">
            <div className="col-lg-8 container-fluid">
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <div className="isHide_searchbar">
                     <Searchbar />
                  </div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item dropdown">
                        <Link
                           to="#"
                           className="nav-link dropdown-toggle navbar-brand"
                           id="navbarDropdown"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           All catogery
                        </Link>
                        <ul
                           className="dropdown-menu"
                           aria-labelledby="navbarDropdown"
                        >
                           <li>
                              <Link to="#" className="dropdown-item">
                                 Item no. 1
                              </Link>
                           </li>
                           <li>
                              <Link to="#" className="dropdown-item">
                                 Items no. 2
                              </Link>
                           </li>
                           <li>
                              <hr className="dropdown-divider" />
                           </li>
                           <li>
                              <Link to="#" className="dropdown-item">
                                 Catogory 3
                              </Link>
                           </li>
                        </ul>
                     </li>
                     <li className="nav-item">
                        <Link
                           to="#"
                           className="nav-link active"
                           aria-current="page"
                           href="#"
                        >
                           Fashion
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Supermarket
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Electronics
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Baby and Toys
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Fitness sport
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="#" className="nav-link">
                           Furnitures
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
}
