const express = require('express');
const router = express.Router();
const inventoryController = require("../controllers/InventoryController");

router.get("/", inventoryController.getAllInventories);
router.put("/:inventoryId", inventoryController.updateInventory);
router.delete("/:inventoryId", inventoryController.deleteSingleInventory);

// Export the Router------------------------------
module.exports = router;




