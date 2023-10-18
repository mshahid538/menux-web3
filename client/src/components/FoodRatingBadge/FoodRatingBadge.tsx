import CSS from "csstype";
import React, { useEffect } from "react";

const ratingsStyles: CSS.Properties = {
  marginTop: "20px",
};

interface FoodRatingBadgeProps {
  businessId: string;
  badgeUrl: string;
}

const FoodRatingBadge: React.FC<FoodRatingBadgeProps> = ({
  businessId,
  badgeUrl,
}) => {
  useEffect(() => {
    const link = document.createElement("a");
    link.href = `https://ratings.food.gov.uk/business/${businessId}`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = badgeUrl;
    img.alt = `Food hygiene rating for ${businessId}`;
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
  }, [businessId, badgeUrl]);
  // eslint-disable-next-line react/style-prop-object
  return (
    <div id="foodRatingContainer" style={ratingsStyles}>
      {}
    </div>
  );
};

export default FoodRatingBadge;
