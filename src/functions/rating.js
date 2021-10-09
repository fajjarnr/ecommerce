import React from "react";
import StarRating from "react-star-ratings";

// how reduce work
// [1, 4, 6, 7]
// 1 + 4 = 5
// 5 + 6 = 11
// 11 + 7 = 18

export const showAverage = (product) => {
  if (product && product.ratings) {
    let ratingsArray = product && product.ratings;
    let total = [];
    let length = ratingsArray.length;
    // console.log("length", length);

    ratingsArray.map((rating) => total.push(rating.star));
    let totalReduced = total.reduce((prev, next) => prev + next, 0);
    // console.log("totalReduced", totalReduced);

    let highest = length * 5;
    // console.log("highest", highest);

    let result = (totalReduced * 5) / highest;
    // console.log("result", result);

    return (
      <div className="text-center pt-1 pb-3">
        <span>
          <StarRating
            rating={result}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="orange"
          />{" "}
          ({product.ratings.length})
        </span>
      </div>
    );
  }
};
