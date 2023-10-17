import CSS from 'csstype';
import React, { useEffect } from "react";


const ratingsStyles: CSS.Properties = {
  marginTop:'20px'
};

const FoodRatingBadge = () => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href =
      "https://ratings.food.gov.uk/business/1273442/ribeye-steakhouse-manchester/online-ratings";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src =
      "https://ratings.food.gov.uk/embed/badges/fhrs/3/fhrs-badge-5.svg";
    img.alt = "Food hygiene rating is 5: Very good";
    img.style.minWidth = "291px";
    img.style.height = "120px";
    img.style.width = "200px";

    link.appendChild(img);

    const foodRatingContainer = document.getElementById("foodRatingContainer");
    if (foodRatingContainer) {
      foodRatingContainer.appendChild(link);
    }

    return () => {
      if (foodRatingContainer) {
        foodRatingContainer.removeChild(link);
      }
    };
  }, []);

  // eslint-disable-next-line react/style-prop-object
  return <div id="foodRatingContainer" style={ratingsStyles}>{}</div>;
};

export default FoodRatingBadge;
