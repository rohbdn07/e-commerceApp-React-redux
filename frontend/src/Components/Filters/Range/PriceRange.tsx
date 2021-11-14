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

export default function PriceRange(): JSX.Element {
   const [value, setValue] = React.useState<number[]>([0, 150]);
   const [filter, setFilter] = React.useState<number[]>([]);
   const dispatch = useDispatch();

   //UseEffect to dispatch action to update the filter
   React.useEffect(() => {
      const disptachFilteredProduct = (): void => {
         dispatch({
            type: ActionType.GET_FILTERED_PRODUCTS,
            payload: filter,
         });
      };
      disptachFilteredProduct();
   }, [filter, dispatch]);

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

   return (
      <>
         <Box sx={{ width: "100%", backgroundColor: "black", p: 2 }}>
            <Typography sx={{ color: "white" }}>FILTER BY PRICE</Typography>
            <Slider
               getAriaLabel={() => "Minimum distance"}
               value={value}
               onChange={handleChange}
               valueLabelDisplay="auto"
               getAriaValueText={valuetext}
               step={10}
               marks
               min={0}
               max={200}
               color="secondary"
               disableSwap
            />
            <Box sx={{ marginBottom: 1 }}>
               <span>
                  ${value[0]} - ${value[1]}
               </span>
            </Box>

            <Button
               sx={{ color: "white" }}
               variant="outlined"
               onClick={() => setFilter(value)}
            >
               FILTER
            </Button>
         </Box>
      </>
   );
}
