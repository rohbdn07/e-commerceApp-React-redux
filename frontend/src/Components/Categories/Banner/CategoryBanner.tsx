import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import "./Banner.scss";
import { IFetchedData } from "../../../Redux/Action/getProducts-Action";

interface IResponseData {
   isError: boolean;
   isLoading: boolean;
   isSuccess: boolean;
   data: IFetchedData[] | undefined;
}

export default function CategoryBanner({
   isError,
   isLoading,
   isSuccess,
   data,
}: IResponseData) {
   const categoryItemImage: any =
      data !== undefined &&
      data?.map((item) => (
         <CardMedia
            component="img"
            // classes="bannerImage"
            className="bannerImage"
            // height="194"
            image={item.image}
            alt="product-image"
         />
      ));

   const categoryItemTitle =
      data !== undefined &&
      data?.map((item) => (
         <div>
            <h2>{item.title}</h2>
         </div>
      ));

   return (
      <>
         <div className="container mt-5">
            {isError ? "No banner item found" : null}
            <Grid container spacing={2}>
               <Grid item xs={10} md={4}>
                  {isLoading ? (
                     <div
                        className="spinner-border text-primary text-center"
                        role="status"
                     >
                        <span className="visually-hidden"></span>
                     </div>
                  ) : (
                     <div>
                        {categoryItemImage !== undefined && categoryItemImage
                           ? categoryItemImage[0]
                           : null}
                     </div>
                  )}
               </Grid>
               <Grid item xs={10} md={8}>
                  <h2>
                     {categoryItemTitle !== undefined && categoryItemTitle
                        ? categoryItemTitle[0]
                        : null}
                  </h2>
               </Grid>
            </Grid>
         </div>
      </>
   );
}
