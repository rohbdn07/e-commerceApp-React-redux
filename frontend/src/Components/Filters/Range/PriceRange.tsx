import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { ActionType } from "../../../Redux/Action/actionTypes";
import { Typography } from "@mui/material";

function valuetext(value: number) {
   return `${value}`;
}

const minDistance = 10;

export default function PriceRange() {
   const [value, setValue] = React.useState<number[]>([10, 110]);
   const dispatch = useDispatch();

   const handleChange = (
      event: Event,
      newValue: number | number[],
      activeThumb: number
   ) => {
      if (!Array.isArray(newValue)) {
         return;
      }

      if (activeThumb === 0) {
         setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      } else {
         setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      }
   };

   const getFilteredProduct = () => {
      dispatch({
         type: ActionType.GET_FILTERED_PRODUCTS,
         payload: value,
      });
   };

   return (
      <>
         <Box sx={{ width: "100%", backgroundColor: "#e9ecef", p: 1 }}>
            <Typography>FILTER BY PRICE</Typography>
            <Slider
               getAriaLabel={() => "Minimum distance"}
               value={value}
               onChange={handleChange}
               valueLabelDisplay="auto"
               getAriaValueText={valuetext}
               step={10}
               marks
               min={10}
               max={150}
               color="secondary"
               disableSwap
            />

            <p>
               ${value[0]} - ${value[1]}
            </p>
            <Button variant="contained" onClick={getFilteredProduct}>
               FILTER
            </Button>
         </Box>
      </>
   );
}
