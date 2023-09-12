import r1 from "../assets/img/r1.jpg"
import r2 from "../assets/img/r2.jpg"
import r3 from "../assets/img/r3.jpg"

export const Data = {
  "restaurants": [
    {
      "id": 1,
      "name": "Bun & Base",
      "specials": ["Amercians", "Burgers", "Pizza"],
      "location": "123 Main St, City",
      "img": r1,
      "menu": [
        {
          "id": 1,
          "category": "Mains",
          "products": [
            {
              "id": 1,
              "name": "Pan Fried Chicken Breast",
              "notSuitable": ["Vegetarian", "Vegan"],
              "mayContain": ["Nuts", "Milk"],
              "ingredients": [""]
            },
            {
              "id": 2,
              "name": "Beef Ribs",
              "notSuitable": [ "Vegan"],
              "mayContain": ["Nuts"]
            },
            {
              "id": 3,
              "name": "Backed Canon Lamb",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Milk"]
            },
            {
              "id": 4,
              "name": "Truffle Ravioli",
              "notSuitable": [ "Vegan"],
              "mayContain": [ "Milk"]
            },
            {
              "id": 5,
              "name": "Steamed Salmon",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Nuts"]
            }
          ]
        },
        {
          "id": 2,
          "category": "Staters",
          "products": [
            {
              "id": 1,
              "name": "Pan Fried Chicken Breast",
              "notSuitable": ["Vegetarian", "Vegan"],
              "mayContain": ["Nuts", "Milk"]
            },
            {
              "id": 2,
              "name": "Beef Ribs",
              "notSuitable": [ "Vegan"],
              "mayContain": ["Nuts"]
            },
            {
              "id": 3,
              "name": "Backed Canon Lamb",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Milk"]
            },
            {
              "id": 4,
              "name": "Truffle Ravioli",
              "notSuitable": [ "Vegan"],
              "mayContain": [ "Milk"]
            },
            {
              "id": 5,
              "name": "Steamed Salmon",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Nuts"]
            }
          ]
        },
        {
          "id": 3,
          "category": "Wagyu",
          "products": [
            {
              "id": 1,
              "name": "Pan Fried Chicken Breast",
              "notSuitable": ["Vegetarian", "Vegan"],
              "mayContain": ["Nuts", "Milk"]
            },
            {
              "id": 2,
              "name": "Beef Ribs",
              "notSuitable": [ "Vegan"],
              "mayContain": ["Nuts"]
            },
            {
              "id": 3,
              "name": "Backed Canon Lamb",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Milk"]
            },
            {
              "id": 4,
              "name": "Truffle Ravioli",
              "notSuitable": [ "Vegan"],
              "mayContain": [ "Milk"]
            },
            {
              "id": 5,
              "name": "Steamed Salmon",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Nuts"]
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Ribeye Steakhouse",
      "specials": ["Steakhouse", "Grill", "Halal"],
      "location": "123 Main St, City",
      "img": r2,
      "menu": [
        {
          "id": 1,
          "category": "Staters",
          "products": [
            {
              "id": 1,
              "name": "Pan Fried Chicken Breast",
              "notSuitable": ["Vegetarian", "Vegan"],
              "mayContain": ["Nuts", "Milk"]
            },
            {
              "id": 2,
              "name": "Beef Ribs",
              "notSuitable": [ "Vegan"],
              "mayContain": ["Nuts"]
            },
            {
              "id": 3,
              "name": "Backed Canon Lamb",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Milk"]
            },
            {
              "id": 4,
              "name": "Truffle Ravioli",
              "notSuitable": [ "Vegan"],
              "mayContain": [ "Milk"]
            },
            {
              "id": 5,
              "name": "Steamed Salmon",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Nuts"]
            }
          ]
        },
        {
          "id": 2,
          "name": "Creekstone",
          "dishes": ["abc", "ghf", "ijk", "xyz"]
        },
        {
          "id": 3,
          "name": "Wagyu",
          "dishes": [
            {
              "id": 1,
              "name": "Pan Fried Chicken Breast",
              "notSuitable": ["Vegetarian", "Vegan"],
              "mayContain": ["Nuts", "Milk"]
            },
            {
              "id": 2,
              "name": "Beef Ribs",
              "notSuitable": [ "Vegan"],
              "mayContain": ["Nuts"]
            },
            {
              "id": 3,
              "name": "Backed Canon Lamb",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Milk"]
            },
            {
              "id": 4,
              "name": "Truffle Ravioli",
              "notSuitable": [ "Vegan"],
              "mayContain": [ "Milk"]
            },
            {
              "id": 5,
              "name": "Steamed Salmon",
              "notSuitable": ["Vegetarian"],
              "mayContain": ["Nuts"]
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Abdul's",
      "specials": ["Indian", "Curry"],
      "location": "456 Elm St, Town",
      "img": r3,
      "menu": [
        {
          "id": 1,
          "category": "Staters",
          "products": [
            "Pan Fried Chicken Breast",
            "Beef Ribs",
            "Backed Canon Lamb",
            "Truffle Ravioli",
            "Steamed Salmon"
          ]
        },
        {
          "id": 2,
          "name": "Creekstone",
          "dishes": ["abc", "def", "ghf", "ijk", "xyz"]
        },
        {
          "id": 3,
          "name": "Wagyu",
          "dishes": ["aaa", "bbb", "ccc", "ddd", "eee"]
        }
      ]
    }
  ],

  "allergies": {
    "nuts": "Nuts",
    "peanut": "Penaut",
    "fish": "Fish",
    "eggs": "eggs",
    "crustaceans": "Crustaceans",
    "molluscs": "Molluscs",
    "milk": "Milk",
    "soya": "Soya",
    "celery": "Celery",
    "mustard": "Mustard",
    "lupin": "Lupin",
    "sesame-seeds": "Sesame Seeds",
    "sulphite": "Sulphite",
    "cereals-w-gluten": "Cereals w Gluten",
    "dairy": "Dairy",
    "gluten": "Gluten"
  }
}
