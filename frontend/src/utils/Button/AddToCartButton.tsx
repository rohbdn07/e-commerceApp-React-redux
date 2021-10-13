import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { blue, green } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { selectToCartAction } from "../../Redux/Action/selectToCartAction";
import { RootState } from "../../Redux/Reducer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
   color: theme.palette.getContrastText(blue[500]),
   backgroundColor: blue[800],
   width: "fit-content",
   marginTop: 2,
   height: 40,
   paddingTop: 0,
   paddingBottom: 0,
   "&:hover": {
      backgroundColor: green[600],
   },
}));

export default function AddToCartButton({ itemId }: any): JSX.Element {
   const dispatch = useDispatch();
   const selectedItems: any = useSelector(
      (state: RootState) => state.productReducer?.selectedItems
   );

   const isIdExisted = selectedItems.some((item: any) => {
      if (item.id === itemId) {
         return true;
      }
      return false;
   });

   const addTocart = (itemId: string): void => {
      if (itemId) {
         dispatch(selectToCartAction(itemId));
      }
   };
   return (
      <>
         <ColorButton
            variant="contained"
            onClick={() => addTocart(itemId)}
            disabled={isIdExisted}
         >
            {!isIdExisted ? <AddShoppingCartIcon /> : <AddShoppingCartIcon />}
         </ColorButton>
      </>
   );
}
