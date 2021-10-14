import React from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { ActionType } from "../../../Redux/Action/actionTypes";

const Search = styled("div")(({ theme }) => ({
   position: "relative",
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.black, 0.1),
   "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
   },
   marginLeft: 0,
   width: "100%",
   [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
   },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: "100%",
   position: "absolute",
   pointerEvents: "none",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: "inherit",
   "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "12ch",
         "&:focus": {
            width: "20ch",
         },
      },
   },
}));

export default function SearchBar() {
   const [input, setInput] = React.useState<string | null>("");
   const dispatch = useDispatch();

   React.useEffect(() => {
      const dispatchAction = () => {
         dispatch({
            type: ActionType.GET_SEARCH_PRODUCTS,
            payload: input,
         });
      };
      dispatchAction();
   }, [dispatch, input]);

   const handleChange = (e: any) => {
      e.preventDefault();
      setInput(e.target.value);
   };

   return (
      <>
         <Box sx={{ height: 70 }}>
            <Search>
               <SearchIconWrapper>
                  <SearchIcon />
               </SearchIconWrapper>
               <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => handleChange(e)}
               />
            </Search>
         </Box>
      </>
   );
}
