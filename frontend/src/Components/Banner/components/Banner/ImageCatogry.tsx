import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { FeaturesImages } from "../../Images/ImageData";

type CategoryPropsTypes = {
   images: FeaturesImages[];
   title?: string;
   header: string;
};

/**
 *
 * @param {CategoryPropsTypes} props
 * @returns JSX.Element
 */
const ImageCategory = ({ header, images }: CategoryPropsTypes): JSX.Element => {
   return (
      <>
         <ImageList
            sx={{ width: "fit-content", height: 500 }}
            variant="woven"
            // rowHeight={164}
            className="container mt-5"
            cols={5}
            // gap={5}
         >
            <h2 className="p-3 text-white" style={{ backgroundColor: "black" }}>
               {header}
            </h2>
            {images.map((item: any, index: number) => (
               <ImageListItem key={index}>
                  <img
                     src={`${item.img}?w=161&fit=crop&auto=format`}
                     srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                     alt={item.title}
                     loading="lazy"
                  />
               </ImageListItem>
            ))}
         </ImageList>
      </>
   );
};

export default ImageCategory;
