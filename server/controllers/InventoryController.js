const inventoryModel = require("../models/InventoryModel");

const deleteSingleInventory = (req, res) => {
  const id = req.params.inventoryId;
  if (inventoryModel.doesInventoryExist(id)) {
    const updatedData = inventoryModel.deleteOne(id);
    return res.status(200).json(updatedData);
  }
  res.status(404).send("Inventory with the given id was not found");
}

module.exports = {
  deleteSingleInventory
};
