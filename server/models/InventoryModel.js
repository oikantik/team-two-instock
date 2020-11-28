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

const deleteOne = (inventoryID) => {
  const inventories = readFromInventoriesFile();
  const newInventoriesList = inventories.filter((item) => item.id !== inventoryID);
  fs.writeFileSync(inventoriesFile, JSON.stringify(newInventoriesList, null, 2));
  return newInventoriesList;
}

module.exports = {
  doesInventoryExist,
  deleteOne
};
