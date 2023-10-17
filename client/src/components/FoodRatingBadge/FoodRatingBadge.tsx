import { useEffect } from "react";

const FoodRatingBadge = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ratings.food.gov.uk/embed/embed-badge.js";
    script.async = true;
    script.setAttribute("data-business-id", "1273442");
    script.setAttribute("data-rating-style", "3");
    script.setAttribute("data-welsh", "false");

    const foodRatingContainer = document.getElementById("foodRatingContainer");
    if (foodRatingContainer) {
      foodRatingContainer.appendChild(script);
    }

    return () => {
      if (foodRatingContainer) {
        foodRatingContainer.removeChild(script);
      }
    };
  }, []);

  return <div id="foodRatingContainer"></div>;
};

export default FoodRatingBadge;
