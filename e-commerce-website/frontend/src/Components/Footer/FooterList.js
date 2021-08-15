import React from "react";
import Brands from "./Brands";
import "./Footer.scss";
import { footerItems } from "../../FooterItems";
import FooterEnd from "./FooterEnd";

export default function FooterList() {
  console.log("the footer items are", footerItems);
  return (
    <>
      <div className="footer">
        <div className="col-lg-8 mx-auto footer_wrapper">
          {footerItems &&
            footerItems.map((item) => (
              <Brands
                key={item.index}
                title={item.title}
                item1={item.item1}
                item2={item.item2}
                item3={item.item3}
                item4={item.item4}
                item5={item.item5}
              />
            ))}
        </div>
        <div className="col-lg-8 mx-auto">
          <FooterEnd />
        </div>
      </div>
    </>
  );
}
