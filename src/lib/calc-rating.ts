import { Rating } from "@/types";

function calculateRating(ratings: Rating[]) {
  if (ratings.length === 0) return 0;
  else {
    let sum = 0;

    ratings.forEach((rating) => {
      sum += rating.rating;
    });

    return sum / ratings.length;
  }
}

export default calculateRating;
