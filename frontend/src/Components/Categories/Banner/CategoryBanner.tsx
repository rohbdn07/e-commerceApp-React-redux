import React from "react";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Banner.scss";
import { IFetchedData } from "../../../Redux/Action/getProducts-Action";
import { RootState } from "../../../Redux/Reducer";
import { getDetailBanneritem } from "../../../Redux/Action/getDetailBanneritem";

interface IResponseData {
   isError: boolean;
   isLoading: boolean;
   isSuccess: boolean;
   data: IFetchedData[] | undefined;
}

export default function CategoryBanner({
   isError,
   isLoading,
   data,
}: IResponseData) {
   let history = useHistory();
   const dispatch = useDispatch();
   const allProducts: IFetchedData[] | undefined = useSelector(
      (state: RootState) => state.productReducer?.allProducts
   );

   const { categoryname } = useParams<{ categoryname?: string }>();

   const categoryItemImage =
      data !== undefined &&
      data?.map((item) => (
         <CardMedia
            component="img"
            className="bannerImage"
            image={item.image}
            alt="product-image"
         />
      ));

   const categoryItemTitle =
      data !== undefined &&
      data?.map((item) => (
         <div className="categoryItem_title">
            <h2>{item.title}</h2>
         </div>
      ));

   const categoryDescription =
      data !== undefined &&
      data?.map((item) => {
         return (
            <div className="category_desc">
               <p>{item.description}</p>
            </div>
         );
      });

   const categoryPrice =
      data !== undefined &&
      data?.map((item) => {
         return (
            <div className="categoryItem_price">
               <span>
                  Price <b>${item.price}</b>
               </span>
            </div>
         );
      });

   const reDirectToDetails = (itemId: number): void => {
      let path = `/product/${categoryname}/${itemId}`;
      history.push(path);
      if (allProducts !== undefined) {
         dispatch(getDetailBanneritem(allProducts, itemId));
      }
   };

   const shopNowButton = () => {
      let idExisted: number;
      const isIdExit =
         data !== undefined &&
         data?.some((item) => {
            if (item.id) {
               idExisted = item.id;
               return true;
            }
            return false;
         });
      if (isIdExit === true) {
         return (
            <div className="Shop_now_button">
               <div className="d-grid gap-2 col-9 mx-auto">
                  <button
                     className="btn btn-lg btn-outline-dark"
                     type="button"
                     onClick={() => reDirectToDetails(idExisted)}
                  >
                     <span>BUY NOW</span>
                  </button>
               </div>
            </div>
         );
      }
   };

   return (
      <>
         <div className="container mt-5">
            {isError ? "No banner item found" : null}

            <Grid container spacing={2}>
               <Grid item xs={11} md={5}>
                  {isLoading ? (
                     <Skeleton
                        sx={{ height: 400 }}
                        animation="wave"
                        variant="rectangular"
                     />
                  ) : (
                     <div>
                        {categoryItemImage !== undefined && categoryItemImage
                           ? categoryItemImage[0]
                           : null}
                     </div>
                  )}
               </Grid>

               <Grid item xs={12} md={7}>
                  {isLoading ? (
                     <Skeleton width="100%" height="40%" />
                  ) : categoryItemTitle !== undefined && categoryItemTitle ? (
                     categoryItemTitle[0]
                  ) : null}

                  {isLoading ? (
                     <Skeleton width="60%" />
                  ) : categoryDescription !== undefined &&
                    categoryDescription ? (
                     categoryDescription[0]
                  ) : null}

                  {isLoading ? (
                     <Skeleton width="40%" />
                  ) : categoryPrice !== undefined && categoryPrice ? (
                     categoryPrice[0]
                  ) : null}

                  {isLoading ? (
                     <Skeleton width="20%" height="30%" />
                  ) : data !== undefined && data ? (
                     shopNowButton()
                  ) : null}
               </Grid>
            </Grid>
         </div>
      </>
   );
}
