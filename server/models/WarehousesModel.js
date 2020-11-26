const fs = require("fs");
const warehousesFile = "./data/warehouses.json";
const inventoriesFile = "./data/inventories.json";

const readFromWarehousesFile = () => {
  const warehouses = fs.readFileSync(warehousesFile);
  return JSON.parse(warehouses);
};

const readFromInventoriesFile = () => {
  const inventories = fs.readFileSync(inventoriesFile);
  return JSON.parse(inventories);
};

const findOne = (id) => {
  const warehouses = readFromWarehousesFile();
  const warehouse = warehouses.find((warehouse) => warehouse.id === id);
  if (warehouse) {
    const allInventories = readFromInventoriesFile();
    const inventories = allInventories.filter(
      (inventory) => inventory.warehouseID === warehouse.id
    );
    return { ...warehouse, inventories };
  }
  return warehouse;
};

const doesWarehouseExist = (id) => {
  const warehouses = readFromWarehousesFile();
  const warehouse = warehouses.find((warehouse) => warehouse.id === id);
  if (warehouse) {
    return true;
  }
  return false;
}

const deleteWarehouseInventory = (warehouseID) => {
  const inventories = readFromInventoriesFile();
  const newInventoriesList = inventories.filter((item) => item.warehouseID !== warehouseID);
  fs.writeFileSync(inventoriesFile, JSON.stringify(newInventoriesList));
}

const deleteOne = (warehouseID) => {
  const warehouses = readFromWarehousesFile();
  const newWarehouseList = warehouses.filter((warehouse) => warehouse.id !== warehouseID);
  fs.writeFileSync(warehousesFile, JSON.stringify(newWarehouseList));
  deleteWarehouseInventory(warehouseID);
  return newWarehouseList;
}

module.exports = {
  readFromWarehousesFile,
  findOne,
  doesWarehouseExist,
  deleteOne
};
