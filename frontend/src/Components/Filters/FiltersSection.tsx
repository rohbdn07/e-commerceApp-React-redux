import React from "react";
import SearchBar from "./Search/SearchBar";
import Box from "@mui/material/Box";
import PriceRange from "./Range/PriceRange";

export default function FiltersSection() {
   return (
      <>
         <Box>
            <div className="filterSection_searchbar">
               <SearchBar />
            </div>
            <Box sx={{ mt: 2 }}>
               <PriceRange />
            </Box>
         </Box>
      </>
   );
}
