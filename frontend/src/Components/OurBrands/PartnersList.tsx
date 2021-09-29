import React from "react";
import Partners from "./Partners";
import { brands } from "../../Brands";
import "../OurBrands/Partners.scss";

export default function PartnersList(): JSX.Element {
   return (
      <>
         <div className="partnerList">
            <div className="col-lg-8 mx-auto partnerList_wrapper">
               <h2>Our Brands</h2>
               <div className="partner_row">
                  {brands &&
                     brands.map((item, index) => {
                        return (
                           <Partners
                              key={index}
                              image={item.image}
                              text={item.text}
                           />
                        );
                     })}
               </div>
            </div>
         </div>
      </>
   );
}
