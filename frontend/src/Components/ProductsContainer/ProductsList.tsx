import React from "react";
import { IFetchedData } from "../../Redux/Action/getProducts-Action";
import Products from "./Products";

interface IText {
   title: string;
   category: string;
}

interface IProductsProps {
   allProducts: IFetchedData[] | undefined;
}

const text: IText[] = [
   {
      title: "Men's clothes",
      category: "men's clothing",
   },
   {
      title: "Women's clothes",
      category: "women's clothing",
   },
   {
      title: "Electronics",
      category: "electronics",
   },
   {
      title: "Jewelery",
      category: "jewelery",
   },
];

const ProductsList = ({ allProducts }: IProductsProps): JSX.Element => {
   return (
      <>
         <div className="container">
            <div className="col-lg-12 product_list">
               {text?.map((item, index) => (
                  <Products
                     key={index}
                     title={item.title}
                     category={item.category}
                     allProducts={allProducts}
                  />
               ))}
            </div>
         </div>
      </>
   );
};

export default React.memo(ProductsList);
