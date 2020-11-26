const express = require("express");
const router = express.Router();

const warehousesController = require("../controllers/WarehousesController");

router.get("/", warehousesController.getAllWarehouses);
router.get("/:warehouseId", warehousesController.getSingleWarehouse);

// Export the Router------------------------------
module.exports = router;
