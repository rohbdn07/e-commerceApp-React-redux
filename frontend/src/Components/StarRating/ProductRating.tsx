import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function ProductRating(props: any): JSX.Element {
   const { ratingNumber } = props;
   return (
      <>
         <div className="mb-3">
            <StarRatingComponent
               value={ratingNumber}
               starColor="red"
               starCount={5}
               name="rating"
            />
         </div>
      </>
   );
}
