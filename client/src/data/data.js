import r1 from "../assets/img/r1.jpg";
import r2 from "../assets/img/r2.jpg";
import r3 from "../assets/img/r3.jpg";

// allergy icons
import nuts from "../assets/img/nuts.png";
import Vegan from "../assets/img/Vegan.png";
import penuts from "../assets/img/penuts.png";
import fish from "../assets/img/fish.png";
import eggs from "../assets/img/eggs.png";
import milk from "../assets/img/milk.png";
import soya from "../assets/img/soya.png";
import chery from "../assets/img/chery.png";
import mustard from "../assets/img/mustard.png";
import lupin from "../assets/img/lupin.png";
import seeds from "../assets/img/seed.png";
import sulphate from "../assets/img/sulphate.png";
import gluten from "../assets/img/gluten.png";
import m from "../assets/img/m.png";
import c from "../assets/img/c.png";

export const Data = {
  restaurants: [
    {
      id: 1,
      name: "Bun & Base",
      specials: ["Amercians", "Burgers", "Pizza"],
      location: "123 Main St, City",
      img: r1,
      menuFood: [
        {
          id: 1,
          category: "Bun & Base Starters",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
              ingredients: [""],
              description:
                "Filled with a cheesy garlic sorrel butter and accompained with a tomato and basil sauce. Chilli compound.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: [
                    "Fish",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                    "Sulphite",
                  ],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Soya"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Peanuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 2,
              name: "Beef Ribs",
              notSuitable: ["Vegan"],
              mayContain: ["Nuts"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 3,
              name: "Backed Canon Lamb",
              notSuitable: ["Vegetarian"],
              mayContain: ["Milk"],
              description:
                "Filled with butter and accompained with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],
              description: "Filled with a butter and accompained.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 5,
              name: "Steamed Salmon",
              notSuitable: ["Vegetarian"],
              mayContain: ["Nuts"],
              description: "Filled with a cheesy garlic sorrel.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          category: "Creekstone",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
            },
          ],
        },
        {
          id: 3,
          category: "Wagyu",
          products: [
            {
              id: 2,
              name: "Beef Ribs",
              notSuitable: ["Vegan"],
              mayContain: ["Nuts"],
            },
          ],
        },
        {
          id: 4,
          category: "Aberdenn Angus",
          products: [
            {
              id: 3,
              name: "Backed Canon Lamb",
              notSuitable: ["Vegetarian"],
              mayContain: ["Milk"],
            },
          ],
        },
        {
          id: 5,
          category: "Mains",
          products: [
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],
            },
          ],
        },
        {
          id: 6,
          category: "Sides",
          products: [
            {
              id: 5,
              name: "Steamed Salmon",
              notSuitable: ["Vegetarian"],
              mayContain: ["Nuts"],
            },
          ],
        },
        {
          id: 7,
          category: "Desserts",
          products: [
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],
            },
          ],
        },
        {
          id: 8,
          category: "Mocktails",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
            },
          ],
        },
      ],
      menuDrinks: [
        {
          name: "Bun & Base Soft Drinks",
          products: [
            {
              id: 1,
              name: "Cocacola Classic",
            },
            {
              id: 2,
              name: "Coke Zera",
            },
            {
              id: 3,
              name: "Diet Coke",
            },
            {
              id: 4,
              name: "Sprite Zera",
            },
            {
              id: 5,
              name: "Fanta",
            },
          ],
        },
        {
          name: "Belvoir",
        },
        {
          name: "Juices",
        },
        {
          name: "Hot Drinks",
          products: [
            {
              id: 1,
              name: "Flat white",
            },
            {
              id: 2,
              name: "Capinccino",
            },
            {
              id: 3,
              name: "Capinccino",
            },
            {
              id: 4,
              name: "Doubl Expresses",
            },
            {
              id: 5,
              name: "Hot Chocolate",
            },
          ],
        },
        {
          name: "Teas",
        },
      ],
    },
    {
      id: 2,
      name: "Ribeye Steakhouse",
      specials: ["Steakhouse", "Grill", "Halal"],
      location: "123 Main St, City",
      img: r2,
      menuFood: [
        {
          id: 1,
          category: "Ribeye Steakhouse Starters",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
              ingredients: [""],
              description:
                "Filled with a cheesy garlic sorrel butter and accompained with a tomato and basil sauce. Chilli compound.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: [
                    "Fish",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                    "Sulphite",
                  ],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Soya"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Peanuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 2,
              name: "Beef Ribs",
              notSuitable: ["Vegan"],
              mayContain: ["Nuts"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 3,
              name: "Backed Canon Lamb",
              notSuitable: ["Vegetarian"],
              mayContain: ["Milk"],
              description:
                "Filled with butter and accompained with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],
              description: "Filled with a butter and accompained.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 5,
              name: "Steamed Salmon",
              notSuitable: ["Vegetarian"],
              mayContain: ["Nuts"],
              description: "Filled with a cheesy garlic sorrel.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          category: "Creekstone",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
              description: "Filled with a cheesy garlic sorrel.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          category: "Wagyu",
          products: [
            {
              id: 2,
              name: "Beef Ribs",
              notSuitable: ["Vegan"],
              mayContain: ["Nuts"],
              description: "Filled with a butter and accompained.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          category: "Aberdenn Angus",
          products: [
            {
              id: 3,
              name: "Backed Canon Lamb",
              notSuitable: ["Vegetarian"],
              mayContain: ["Milk"],
              description:
                "Filled with butter and accompained with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          category: "Mains",
          products: [
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],

              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 6,
          category: "Sides",
          products: [
            {
              id: 5,
              name: "Steamed Salmon",
              notSuitable: ["Vegetarian"],
              mayContain: ["Nuts"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 7,
          category: "Desserts",
          products: [
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 8,
          category: "Mocktails",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
      ],
      menuDrinks: [
        {
          name: "Ribeye Steakhouse Soft Drinks",
          products: [
            {
              id: 1,
              name: "Cocacola Classic",
            },
            {
              id: 2,
              name: "Coke Zera",
            },
            {
              id: 3,
              name: "Diet Coke",
            },
            {
              id: 4,
              name: "Sprite Zera",
            },
            {
              id: 5,
              name: "Fanta",
            },
            {
              id: 6,
              name: "Appletiser",
            },
          ],
        },
        {
          name: "Belvoir",
          products: [
            {
              id: 1,
              name: "Belvoir Lemonade",
            },
            {
              id: 2,
              name: "Belvoir Raspberry Lemonade",
            },
            {
              id: 3,
              name: "Belvoir Elderflower and Rose",
            },
            {
              id: 4,
              name: "Belvoir Elderflower",
            },
            {
              id: 5,
              name: "Belvoir Ginger Beer",
            },
          ],
        },
        {
          name: "Juices",
          products: [
            {
              id: 1,
              name: "Apple",
            },
            {
              id: 2,
              name: "Cranberry",
            },
            {
              id: 3,
              name: "Orange",
            },
            {
              id: 4,
              name: "Pineapple",
            },
            {
              id: 5,
              name: "Pomegranate",
            },
            {
              id: 6,
              name: "Mango",
            },
          ],
        },
        {
          name: "Hot Drinks",
          products: [
            {
              id: 1,
              name: "Flat white",
            },
            {
              id: 2,
              name: "Cappuccino",
            },
            {
              id: 3,
              name: "Latte",
            },
            {
              id: 4,
              name: "Espresso",
            },
            {
              id: 5,
              name: "Double Espresso",
            },
            {
              id: 6,
              name: "Macchiato",
            },
            {
              id: 7,
              name: "Hot Chocolate",
            },
          ],
        },
        {
          name: "Teas",
          products: [
            {
              id: 1,
              name: "Green",
            },
            {
              id: 2,
              name: "English Breakfast",
            },
            {
              id: 3,
              name: "Mint",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Abdul's",
      specials: ["Indian", "Curry"],
      location: "456 Elm St, Town",
      img: r3,
      menuFood: [
        {
          id: 1,
          category: "Abdul's Starters",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
              ingredients: [""],
              description:
                "Filled with a cheesy garlic sorrel butter and accompained with a tomato and basil sauce. Chilli compound.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: [
                    "Fish",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                    "Sulphite",
                  ],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Soya"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Peanuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 2,
              name: "Beef Ribs",
              notSuitable: ["Vegan"],
              mayContain: ["Nuts"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 3,
              name: "Backed Canon Lamb",
              notSuitable: ["Vegetarian"],
              mayContain: ["Milk"],
              description:
                "Filled with butter and accompained with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],
              description: "Filled with a butter and accompained.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
            {
              id: 5,
              name: "Steamed Salmon",
              notSuitable: ["Vegetarian"],
              mayContain: ["Nuts"],
              description: "Filled with a cheesy garlic sorrel.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 2,
          category: "Creekstone",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
              description: "Filled with a cheesy garlic sorrel.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 3,
          category: "Wagyu",
          products: [
            {
              id: 2,
              name: "Beef Ribs",
              notSuitable: ["Vegan"],
              mayContain: ["Nuts"],
              description: "Filled with a butter and accompained.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 4,
          category: "Aberdenn Angus",
          products: [
            {
              id: 3,
              name: "Backed Canon Lamb",
              notSuitable: ["Vegetarian"],
              mayContain: ["Milk"],
              description:
                "Filled with butter and accompained with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: [
                    "Milk",
                    "Crustaceans",
                    "Mustard",
                    "Lupin",
                    "Sesame Seeds",
                  ],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          category: "Mains",
          products: [
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],

              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 6,
          category: "Sides",
          products: [
            {
              id: 5,
              name: "Steamed Salmon",
              notSuitable: ["Vegetarian"],
              mayContain: ["Nuts"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 7,
          category: "Desserts",
          products: [
            {
              id: 4,
              name: "Truffle Ravioli",
              notSuitable: ["Vegan"],
              mayContain: ["Milk"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
        {
          id: 8,
          category: "Mocktails",
          products: [
            {
              id: 1,
              name: "Pan Fried Chicken Breast",
              notSuitable: ["Vegetarian", "Vegan"],
              mayContain: ["Nuts", "Milk"],
              description: "Filled with a tomato and basil sauce.",
              types: [
                {
                  name: "Vegetarian",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Vegan",
                  key: "tick",
                  list: [],
                },
                {
                  name: "Free From",
                  key: "tick",
                  list: ["Fish", "Sulphite"],
                },
                {
                  name: "Ask To Modify",
                  key: "info",
                  list: ["Milk", "Crustaceans"],
                },
                {
                  name: "Cross Contamination",
                  key: "info",
                  list: ["Nuts", "Eggs"],
                },
                {
                  name: "Contains",
                  key: "cancel",
                  list: [" Cereals W Gluten"],
                },
                {
                  name: "Not suitable for",
                  key: "empty",
                  list: ["Vegetarian"],
                },
                {
                  name: "May contain",
                  key: "empty",
                  list: ["Milk"],
                },
              ],
            },
          ],
        },
      ],
      menuDrinks: [
        {
          name: "Abdul's Soft Drinks",
          products: [
            {
              id: 1,
              name: "Cocacola Classic",
            },
            {
              id: 2,
              name: "Coke Zera",
            },
            {
              id: 3,
              name: "Diet Coke",
            },
            {
              id: 4,
              name: "Sprite Zera",
            },
            {
              id: 5,
              name: "Fanta",
            },
            {
              id: 6,
              name: "Appletiser",
            },
          ],
        },
        {
          name: "Belvoir",
          products: [
            {
              id: 1,
              name: "Belvoir Lemonade",
            },
            {
              id: 2,
              name: "Belvoir Raspberry Lemonade",
            },
            {
              id: 3,
              name: "Belvoir Elderflower and Rose",
            },
            {
              id: 4,
              name: "Belvoir Elderflower",
            },
            {
              id: 5,
              name: "Belvoir Ginger Beer",
            },
          ],
        },
        {
          name: "Juices",
          products: [
            {
              id: 1,
              name: "Apple",
            },
            {
              id: 2,
              name: "Cranberry",
            },
            {
              id: 3,
              name: "Orange",
            },
            {
              id: 4,
              name: "Pineapple",
            },
            {
              id: 5,
              name: "Pomegranate",
            },
            {
              id: 6,
              name: "Mango",
            },
          ],
        },
        {
          name: "Hot Drinks",
          products: [
            {
              id: 1,
              name: "Flat white",
            },
            {
              id: 2,
              name: "Cappuccino",
            },
            {
              id: 3,
              name: "Latte",
            },
            {
              id: 4,
              name: "Espresso",
            },
            {
              id: 5,
              name: "Double Espresso",
            },
            {
              id: 6,
              name: "Macchiato",
            },
            {
              id: 7,
              name: "Hot Chocolate",
            },
          ],
        },
        {
          name: "Teas",
          products: [
            {
              id: 1,
              name: "Green",
            },
            {
              id: 2,
              name: "English Breakfast",
            },
            {
              id: 3,
              name: "Mint",
            },
          ],
        },
      ],
    },
  ],
};

// allergy data
export const AllergicList = [
  {
    name: "Nuts",
    icon: nuts,
  },
  {
    name: "Peanuts",
    icon: penuts,
  },
  {
    name: "Fish",
    icon: fish,
  },
  {
    name: "Eggs",
    icon: eggs,
  },
  {
    name: "Crustaceans",
    icon: c,
  },
  {
    name: "Molluscs",
    icon: m,
  },
  {
    name: "Milk",
    icon: milk,
  },
  {
    name: "Soya",
    icon: soya,
  },
  {
    name: "Celery",
    icon: chery,
  },
  {
    name: "Mustard",
    icon: mustard,
  },
  {
    name: "Lupin",
    icon: lupin,
  },
  {
    name: "Sulphite",
    icon: sulphate,
  },
  {
    name: "Sesame Seeds",
    icon: seeds,
  },
  {
    name: "Cereals w Gluten",
    icon: gluten,
  },
];

// Dietary requirements data
export const DietaryReq = [
  {
    id: 1,
    name: "Lactose Intolerant",
  },
  {
    id: 2,
    name: "Gluten Intolerant/Sensitive",
  },
  {
    id: 3,
    name: "Vegetarian",
  },
  {
    id: 4,
    name: "Vegan",
  },
  {
    id: 5,
    name: "Kosher",
  },
  {
    id: 6,
    name: "Halal",
  },
  {
    id: 7,
    name: "Diabetic",
  },
];
