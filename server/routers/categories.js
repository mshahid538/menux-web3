const express = require("express");
const router = express.Router();
const categoriesC = require("../controllers/categories");

router.get("/", categoriesC.getCategories);
router.post("/", categoriesC.addCategory);
router.put("/:id", categoriesC.updateCategory);
router.delete("/:id", categoriesC.deleteCategory);

module.exports = router;
