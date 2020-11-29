const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/InventoryController");

router.get("/", inventoryController.getAllInventories);
router.get("/info", inventoryController.getInventorySummary);
router.get("/:inventoryId", inventoryController.getSingleInventory);
router.get("/sort/by/:sortString", inventoryController.sortBy);
router.post("/", inventoryController.createInventory);
router.put("/:inventoryId", inventoryController.updateInventory);
router.delete("/:inventoryId", inventoryController.deleteSingleInventory);

// Export the Router------------------------------
module.exports = router;