import React from "react";
import StarRatings from "react-star-ratings";

export default function ProductRating(props) {
   const { ratingNumber } = props;
   return (
      <>
         <div className="mb-3">
            <StarRatings
               rating={ratingNumber}
               starRatedColor="red"
               // changeRating={this.changeRating}
               numberOfStars={5}
               starDimension="18px"
               starSpacing="4px"
               name="rating"
            />
         </div>
      </>
   );
}
