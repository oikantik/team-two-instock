const warehousesModel = require("../models/WarehousesModel");

const getAllWarehouses = (req, res) => {
  res.status(200).json(warehousesModel.readFromWarehousesFile());
};

const getSingleWarehouse = (req, res) => {
  const id = req.params.warehouseId;
  const warehouse = warehousesModel.findOne(id);
  if (!warehouse) {
    return res.status(404).json({ error: "warehouse not found" });
  }
  res.status(200).json(warehouse);
};

module.exports = {
  getSingleWarehouse,
  getAllWarehouses,
};
