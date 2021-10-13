import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import { getDetailBanneritem } from "../../Redux/Action/getDetailBanneritem";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
   color: theme.palette.getContrastText(blue[500]),
   backgroundColor: blue[800],
   width: "fit-content",
   marginTop: 2,
   height: 40,
   paddingTop: 0,
   paddingBottom: 0,
   "&:hover": {
      backgroundColor: blue[600],
   },
}));

export default function RedirectToDetailPage({
   itemId,
   category,
}: any): JSX.Element {
   const dispatch = useDispatch();
   let history = useHistory();

   const redirectToDetailsPage = (id: number): void => {
      if (category !== undefined) {
         let path = `/product/${category}/${id}`;
         history.push(path);
         dispatch(getDetailBanneritem(id));
      }
   };
   return (
      <>
         <ColorButton
            variant="contained"
            onClick={() => redirectToDetailsPage(itemId)}
         >
            view
         </ColorButton>
      </>
   );
}
