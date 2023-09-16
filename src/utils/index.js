import { Data } from "../data/data";

export function getAllRestaurants() {
  const result = Data.restaurants.map((data, index) => data);
  return result;
}

export function getCategoriesByRestaurantId(restaurantId) {
  const res = Data.restaurants.filter(
    (data, index) => data.id === restaurantId
  );
  console.log(res);
  const categories = res[0].menu.map((data) => ({
    id: data.id,
    category: data.category,
  }));
  return categories;
}

export function getProductsByCategoryId(restaurantId, categoryId) {
  const restaurant = Data.restaurants.find(
    (restaurant) => restaurant.id === restaurantId
  );

  if (restaurant) {
    const category = restaurant.menu.find(
      (category) => category.id === categoryId
    );

    if (category) {
      return category.products;
    }
  }

  return [];
}

export function displayAllergiesForRestaurantCategoryAndProduct(
  restaurantName,
  category,
  productName
) {
  const restaurant = Data.restaurants.find((r) => r.name === restaurantName);

  if (!restaurant) {
    console.log(`Restaurant '${restaurantName}' not found.`);
    return;
  }

  const menuCategory = restaurant.menu.find((c) => c.category === category);

  if (!menuCategory) {
    console.log(
      `Category '${category}' not found for restaurant '${restaurantName}'.`
    );
    return;
  }

  const product = menuCategory.products.find((p) => p.name === productName);

  if (!product) {
    console.log(
      `Product '${productName}' not found in category '${category}' for restaurant '${restaurantName}'.`
    );
    return;
  }

  console.log(
    `Allergens for ${restaurantName} - Category: ${category} - Product: ${productName}`
  );
  console.log(`Not Suitable for: ${product.notSuitable.join(", ")}`);
  console.log(`May Contain: ${product.mayContain.join(", ")}\n`);
}

// Example usage:

displayAllergiesForRestaurantCategoryAndProduct(
  "Ribeye Steakhouse",
  "Staters",
  "Beef Ribs"
);
displayAllergiesForRestaurantCategoryAndProduct(
  "Abdul's",
  "Staters",
  "Steamed Salmon"
);
