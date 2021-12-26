import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Reducer";
import Categoryitem from "./CategoryItem";
import "./Category.scss";
import { IFetchedData } from "../../../interfaces/productItem.interface";

export default function CategoryList({ data, isLoading }: any) {
   const { categoryname } = useParams<{ categoryname: string }>();
   const filterRangeValue = useSelector(
      (state: RootState) => state.productReducer?.filterRangeValue
   );

   const searchProduct = useSelector(
      (state: RootState) => state.productReducer?.searchProduct
   );
   const [filterData, setFilterData] = React.useState([]);

   React.useEffect(() => {
      setFilterData(data);
   }, [data, categoryname]);

   React.useEffect(() => {
      const getData = () => {
         const selectedFiltered: any = [];
         if (data !== undefined) {
            data.forEach((item: any) => {
               if (filterRangeValue !== undefined) {
                  if (
                     item.price >= filterRangeValue[0] &&
                     item.price <= filterRangeValue[1]
                  ) {
                     selectedFiltered.push(item);
                     return setFilterData(selectedFiltered);
                  }
               }
            });
         }
      };
      getData();
   }, [data, filterRangeValue, searchProduct]);

   React.useEffect(() => {
      const filterSearchProduct = () => {
         const getSearchProduct: any = [];
         if (data !== undefined) {
            data.forEach((item: any) => {
               if (searchProduct !== undefined || !null) {
                  if (item.title && searchProduct) {
                     const getItem = [item.title]
                        .toString()
                        .toLowerCase()
                        .includes(searchProduct.toLowerCase());
                     if (getItem) {
                        getSearchProduct.push(item);
                        return setFilterData(getSearchProduct);
                     }
                  }
               }
               if (searchProduct == null) {
                  return setFilterData(data);
               }
            });
         }
      };
      filterSearchProduct();
   }, [data, searchProduct]);

   return (
      <>
         <div className="category_list">
            {filterData &&
               filterData !== undefined &&
               filterData?.map((item: IFetchedData) => (
                  <Categoryitem
                     key={item.id}
                     product={item}
                     isLoading={isLoading}
                     category={categoryname}
                  />
               ))}
         </div>
      </>
   );
}
