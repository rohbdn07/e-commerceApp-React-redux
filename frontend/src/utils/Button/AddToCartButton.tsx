import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import { useSelector, useDispatch } from "react-redux";
import { selectToCartAction } from "../../Redux/Action/selectToCartAction";
import { RootState } from "../../Redux/Reducer";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
   color: theme.palette.getContrastText(blue[500]),
   backgroundColor: blue[800],
   width: "fit-content",
   marginTop: 2,
   height: 40,
   "&:hover": {
      backgroundColor: blue[600],
   },
}));

export default function AddToCartButton(props: any): JSX.Element {
   const dispatch = useDispatch();

   const { itemId } = props;

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
      dispatch(selectToCartAction(itemId));
   };
   return (
      <>
         <ColorButton
            variant="contained"
            onClick={() => addTocart(itemId)}
            disabled={isIdExisted}
         >
            {isIdExisted ? "Added" : "Add to cart"}
         </ColorButton>
      </>
   );
}
