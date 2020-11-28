const inventoryModel = require("../models/InventoryModel");

const deleteSingleInventory = (req, res) => {
  const id = req.params.inventoryId;
  if (inventoryModel.doesInventoryExist(id)) {
    const updatedData = inventoryModel.deleteOne(id);
    return res.status(200).json(updatedData);
  }
  res.status(404).send("Inventory with the given id was not found");
}

const updateInventory = (req, res) => {
  const id = req.params.inventoryId;
  if (!inventoryModel.doesInventoryExist(id)) {
    return res.status(404).send("Inventory with the given ID was not found.");
  }
  if (!inventoryModel.reqBodyIsValid(req.body)) {
    return res.status(400).send("One or more inputs is empty or invalid.");
  }
  const updatedInventory = inventoryModel.updateInventory(id, req.body);
  return res.status(200).json(updatedInventory);
}

module.exports = {
  deleteSingleInventory,
  updateInventory
};
