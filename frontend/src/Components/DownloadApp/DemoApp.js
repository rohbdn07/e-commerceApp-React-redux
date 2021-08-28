import React from "react";
import appstorelogo from "../../assists/Images/applestorelogo.png";
import "./DemoApp.scss";

export default function DemoApp() {
   return (
      <div className="download">
         <div className="col-lg-8 mx-auto download_wrapper">
            <div className="download_text">
               <p>Download app demo text</p>
            </div>
            <div className="download_appStore">
               <img src={appstorelogo} alt="appImage" />
               <img
                  src="https://w7.pngwing.com/pngs/696/500/png-transparent-google-play-mobile-phones-google-search-google-text-logo-sign.png"
                  alt="appImage"
               />
            </div>
         </div>
      </div>
   );
}
