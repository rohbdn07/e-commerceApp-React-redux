import { newArrivalsProduct } from "./Images/ImageData";
import ImageCategory from "./components/Banner/ImageCatogry";

export default function ImageBanner(): JSX.Element {
   return (
      <>
         <ImageCategory
            header="New Arrivals"
            images={newArrivalsProduct.newArrivalsClothes}
         />
         <ImageCategory header="Sales" images={newArrivalsProduct.saleImages} />
      </>
   );
}
