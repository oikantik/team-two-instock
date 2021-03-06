const express = require("express");
const router = express.Router();

const warehousesController = require("../controllers/WarehousesController");

router.get("/", warehousesController.getAllWarehouses);
router.get("/:warehouseId", warehousesController.getSingleWarehouse);
router.get("/:warehouseId/sort/by/:sortString", warehousesController.singleSortBy);
router.get("/sort/by/:sortString", warehousesController.sortBy);
router.get("/search/all", warehousesController.searchWarehouses);
router.delete("/:warehouseId", warehousesController.deleteSingleWarehouse);

router.post("/", warehousesController.createWarehouse);
router.put("/:warehouseId", warehousesController.updateWarehouse);

// Export the Router------------------------------
module.exports = router;