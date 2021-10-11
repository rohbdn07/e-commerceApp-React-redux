import React from "react";
import SearchBar from "./Search/SearchBar";
import Box from "@mui/material/Box";
import PriceRange from "./Range/PriceRange";

export default function FiltersSection() {
   return (
      <>
         <Box sx={{ mt: 5 }}>
            <div className="filterSection_searchbar">
               <SearchBar />
            </div>
            <Box sx={{ mt: 5 }}>
               <PriceRange />
            </Box>
         </Box>
      </>
   );
}
