import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function ProductRating(props: any) {
   const { ratingNumber } = props;
   return (
      <>
         <div className="mb-3">
            <StarRatingComponent
               value={ratingNumber}
               starColor="red"
               // changeRating={this.changeRating}
               starCount={5}
               // starDimension="18px"
               // starSpacing="4px"
               name="rating"
            />
         </div>
      </>
   );
}
