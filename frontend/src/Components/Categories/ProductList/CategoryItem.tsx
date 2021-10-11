import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import ProductRating from "../../StarRating/ProductRating";
import AddToCartButton from "../../../utils/Button/AddToCartButton";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
   color: theme.palette.getContrastText(purple[500]),
   backgroundColor: purple[500],
   "&:hover": {
      backgroundColor: purple[700],
   },
}));

export default function Categoryitem({ product, isLoading }: any) {
   return (
      <>
         <div className="col-lg-3 col-sm-5 product_wrapper" key={product.id}>
            {isLoading ? (
               <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={190}
                  height={90}
               />
            ) : (
               <img
                  src={product.image}
                  className="card-img-top"
                  alt="men's-product"
               />
            )}
            {isLoading ? (
               <div>
                  <Skeleton width="90%" />
                  <Skeleton width="60%" />
                  <Skeleton height={50} width={70} />
               </div>
            ) : (
               <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text price_text">${product.price}</p>
                  {/* <ProductRating ratingNumber={product.rating.rate} /> */}
                  <button className="btn btn-outline-info text-dark mb">
                     view details
                  </button>
                  <AddToCartButton itemId={product.id} />
               </div>
            )}
         </div>

         {/* <Grid sx={{ flexGrow: 1, mb: 2 }} spacing={2}>
            <Grid xs={11} md={4} item>
               <Grid>
                  <Grid key={product.id} item>
                     <Paper
                        elevation={3}
                        sx={{
                           minHeight: 450,
                           width: 300,
                        }}
                     >
                        {isLoading ? (
                           <Skeleton
                              animation="wave"
                              variant="rectangular"
                              width={190}
                              height={90}
                           />
                        ) : (
                           <Box
                              sx={{
                                 width: 170,
                                 minHeight: 250,
                              }}
                           >
                              <img
                                 src={product.image}
                                 className="card-img-top"
                                 alt="men's-product"
                              />
                           </Box>
                        )}
                        {isLoading ? (
                           <div>
                              <Skeleton width="90%" />
                              <Skeleton width="60%" />
                              <Skeleton height={50} width={70} />
                           </div>
                        ) : (
                           <Box>
                              <Typography
                                 variant="subtitle2"
                                 gutterBottom
                                 component="div"
                              >
                                 {product.title}
                              </Typography>
                              <Typography
                                 variant="h5"
                                 gutterBottom
                                 component="span"
                                 color={{ color: "red" }}
                              >
                                 $ {product.price}
                              </Typography>
                              <ProductRating
                                 ratingNumber={product.rating.rate}
                              />
                              <ColorButton variant="contained">
                                 View detail
                              </ColorButton>
                              <AddToCartButton itemId={product.id} />
                           </Box>
                        )}
                     </Paper>
                  </Grid>
               </Grid>
            </Grid>
         </Grid> */}
      </>
   );
}
