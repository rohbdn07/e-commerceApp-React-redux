import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Reducer";
import { IFetchedData } from "../../../Redux/Action/getProducts-Action";
import Categoryitem from "./CategoryItem";
import "./Category.scss";

export default function CategoryList({ data, isLoading }: any) {
   const { categoryname }: any = useParams();
   const filterRangeValue = useSelector(
      (state: RootState) => state.productReducer?.filterRangeValue
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
   }, [data, filterRangeValue]);

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
                  />
               ))}
         </div>
      </>
   );
}
