import React from "react";

interface IBrands {
   title: string;
   item1: string;
   item2: string;
   item3: string;
   item4: string;
   item5: string | undefined;
}

export default function Brands({
   title,
   item1,
   item2,
   item3,
   item4,
   item5,
}: IBrands) {
   return (
      <>
         <div className="brands">
            <div className="brands_wrapper">
               <div className="brands_title">
                  <p>{title}</p>
               </div>
               <div className="brands_names">
                  <p>{item1}</p>
                  <p>{item2}</p>
                  <p>{item3}</p>
                  <p>{item4}</p>
                  <p>{item5}</p>
               </div>
            </div>
         </div>
      </>
   );
}
