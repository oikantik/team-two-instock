const fs = require("fs");
const inventoriesFile = "./data/inventories.json";

const readFromInventoriesFile = () => {
  const inventories = fs.readFileSync(inventoriesFile);
  return JSON.parse(inventories);
};
const doesInventoryExist = (id) => {
  const inventories = readFromInventoriesFile();
  const inventory = inventories.find((inventory) => inventory.id === id);
  if (inventory) {
    return true;
  }
  return false;
}

const reqBodyIsValid = (reqBody) => {
  console.log(reqBody)
  const { warehouseID, warehouseName, itemName, description, category, status, quantity} = reqBody;
  console.log(warehouseID)
  if (!warehouseID || !warehouseName || !itemName || !description || !category || !status || !quantity) {
    return false;
  } else {
    return true;
  }
}

const deleteOne = (inventoryID) => {
  const inventories = readFromInventoriesFile();
  const newInventoriesList = inventories.filter((item) => item.id !== inventoryID);
  fs.writeFileSync(inventoriesFile, JSON.stringify(newInventoriesList, null, 2));
  return newInventoriesList;
}

const updateInventory = (inventoryID, reqBody) => {
  const inventories = readFromInventoriesFile();
  const inventory = inventories.find((inventory) => inventory.id === inventoryID);
  const inventoryIndex = inventories.indexOf(inventory);
  const {  warehouseID, warehouseName, itemName, description, category, status, quantity } = reqBody;
  inventory.warehouseID = warehouseID;
  inventory.warehouseName = warehouseName;
  inventory.itemName = itemName;
  inventory.description = description;
  inventory.category = category;
  inventory.status = status;
  inventory.quantity = quantity;
  inventories[inventoryIndex] = inventory;
  fs.writeFileSync(inventoriesFile, JSON.stringify(inventories, null, 2));
  return inventory;
}

module.exports = {
  doesInventoryExist,
  deleteOne,
  reqBodyIsValid,
  updateInventory
};
