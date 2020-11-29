const inventoryModel = require("../models/InventoryModel");

const getAllInventories = (req, res) => {
  const inventories = inventoryModel.readFromInventoriesFile();
  const categories = inventoryModel.getInventoryCategories();
  const warehouseNames = inventoryModel.getWarehouseNames();
  res.status(200).json({...inventories, categories: [...new Set(categories)], warehouseNames});
}

const getSingleInventory = (req, res) => {
  const id = req.params.inventoryId;
  const inventory = inventoryModel.findOne(id);
  const categories = inventoryModel.getInventoryCategories();
  const warehouseNames = inventoryModel.getWarehouseNames();
  if (!inventory) {
    return res.status(404).json({ error: "Inventory not found" });
  }
  res.status(200).json({...inventory, categories: [...new Set(categories)], warehouseNames});
};

const getInventorySummary = (req, res) => {
  const categories = inventoryModel.getInventoryCategories();
  const warehouseNames = inventoryModel.getWarehouseNames();
  const warehouses = inventoryModel.getWarehouseNameId();
  res.status(200).json({categories: [...new Set(categories)], warehouseNames, warehouses});
};

const deleteSingleInventory = (req, res) => {
  const id = req.params.inventoryId;
  if (inventoryModel.doesInventoryExist(id)) {
    const updatedData = inventoryModel.deleteOne(id);
    return res.status(200).json(updatedData);
  }
  res.status(404).send("Inventory with the given id was not found");
}

const createInventory = (req, res) => {
  if (!inventoryModel.reqBodyIsValid(req.body)) {
    return res.status(400).send("One or more inputs is empty or invalid.");
  }
  const newInventory = inventoryModel.createInventory(req.body);
  const categories = inventoryModel.getInventoryCategories();
  const warehouseNames = inventoryModel.getWarehouseNames();
  res.status(200).json({...newInventory, categories: [...new Set(categories)], warehouseNames});
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
  updateInventory,
  getAllInventories,
  getSingleInventory,
  createInventory,
  getInventorySummary
};
