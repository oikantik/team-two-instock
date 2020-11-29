const warehousesModel = require("../models/WarehousesModel");

const getAllWarehouses = (req, res) => {
  res.status(200).json(warehousesModel.readFromWarehousesFile());
};

const getSingleWarehouse = (req, res) => {
  const id = req.params.warehouseId;
  const warehouse = warehousesModel.findOne(id);
  if (!warehouse) {
    return res.status(404).json({
      error: "warehouse not found"
    });
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

const updateWarehouse = (req, res) => {
  const id = req.params.warehouseId;
  if (!warehousesModel.doesWarehouseExist(id)) {
    return res.status(404).send("Warehouse with the given ID was not found.");
  }
  if (!warehousesModel.reqBodyIsValid(req.body)) {
    return res.status(400).send("One or more inputs is empty or invalid.");
  }
  const updatedWarehouse = warehousesModel.updateWarehouse(id, req.body);
  return res.status(200).json(updatedWarehouse);
}

const createWarehouse = (req, res) => {

  if (!warehousesModel.reqBodyIsValid(req.body)) {
    return res.status(400).send("One or more inputs is empty or invalid.");
  }
  const newWarehouses = warehousesModel.createWarehouse(req.body);
  return res.status(200).json(newWarehouses);
}

const sortBy = (req, res) => {
  const sortString = req.params.sortString;
  const queryString = req.query.type;
  const data = warehousesModel.sortBy(sortString, queryString);
  if (!data) {
    return res.status(400).send("Parameter is invalid.");
  }
  return res.status(200).json(data);
}

module.exports = {
  getSingleWarehouse,
  getAllWarehouses,
  updateWarehouse,
  deleteSingleWarehouse,
  createWarehouse,
  sortBy
};