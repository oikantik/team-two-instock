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

const formatPhoneNumber = (phoneNumber) => {
  let formatted = "";
  for (let i = 0; i < 11; i++) {
    if(i === 0) {
      formatted = "+" + phoneNumber[i] + " (";
    } else if (i === 3) {
      formatted = formatted + phoneNumber[i] + ") "; 
    } else if (i === 6) {
      formatted = formatted + phoneNumber[i] + "-";
    } else {
      formatted = formatted + phoneNumber[i];
    }
  }
  return formatted;
}

const reqBodyIsValid = (reqBody) => {
  const { warehouseName, address, city, country, contactName, position, phone, email } = reqBody;
  if (!warehouseName && !address && !city && !country && !contactName && !position && !phone && !email) {
    return false;
  } else if (phone.replace(/\D/g, "").length === 11 && email.match(/.*\@.*\..*/)) {
    return false;
  } else {
    return true;
  }
}

const updateWarehouse = (warehouseID, reqBody) => {
    const warehouses = readFromWarehousesFile();
    const warehouse = warehouses.find((warehouse) => warehouse.id === warehouseID);
    const { warehouseName, address, city, country, contactName, position, phone, email } = reqBody;
    warehouse.name = warehouseName;
    warehouse.address = address;
    warehouse.city = city;
    warehouse.country = country;
    warehouse.contact.name = contactName;
    warehouse.contact.position = position;
    warehouse.contact.phone = formatPhoneNumber(phone.replace(/\D/g, ""));
    warehouse.contact.email = email;
    const warehouseIndex = warehouses.indexOf(warehouse);
    warehouses[warehouseIndex] = warehouse;
    // console.log(warehouses);
    // fs.writeFileSync(warehouseFile, JSON.stringify(warehouses));
    return warehouse;
}



module.exports = {
  findOne,
  readFromWarehousesFile,
  updateWarehouse, 
  reqBodyIsValid
};
