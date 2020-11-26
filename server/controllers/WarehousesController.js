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

const deleteSingleWarehouse = (req, res) => {
  const id = req.params.warehouseId;
  if (warehousesModel.doesWarehouseExist(id)) {
    const updatedData = warehousesModel.deleteOne(id);
    return res.status(200).json(updatedData);
  } 
  res.status(404).send("Warehouse with the given id was not found");
}

module.exports = {
  getSingleWarehouse,
  getAllWarehouses,
  deleteSingleWarehouse
};
