const fs = require("fs");
const warehousesFile = "./data/warehouses.json";
const inventoriesFile = "./data/inventories.json";
const {
  v4: uuidv4
} = require('uuid');

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
    return {
      ...warehouse,
      inventories
    };
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
  return newInventoriesList
}

const deleteOne = (warehouseID) => {
  const warehouses = readFromWarehousesFile();
  const newWarehouseList = warehouses.filter((warehouse) => warehouse.id !== warehouseID);
  fs.writeFileSync(warehousesFile, JSON.stringify(newWarehouseList));
  const newInventoriesList = deleteWarehouseInventory(warehouseID);
  return {
    warehouses: newWarehouseList,
    inventory: newInventoriesList
  };
}

const formatPhoneNumber = (phoneNumber) => {
  let formatted = "";
  for (let i = 0; i < 11; i++) {
    if (i === 0) {
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
  const {
    warehouseName,
    address,
    city,
    country,
    contactName,
    position,
    phone,
    email
  } = reqBody;
  if (!warehouseName && !address && !city && !country && !contactName && !position && !phone && !email) {
    return false;
  } else if (phone.replace(/\D/g, "").length !== 11 || !email.match(/.*\@.*\..*/)) {
    return false;
  } else {
    return true;
  }
}

const updateWarehouse = (warehouseID, reqBody) => {
  const warehouses = readFromWarehousesFile();
  const warehouse = warehouses.find((warehouse) => warehouse.id === warehouseID);
  const {
    warehouseName,
    address,
    city,
    country,
    contactName,
    position,
    phone,
    email
  } = reqBody;
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
  fs.writeFileSync(warehousesFile, JSON.stringify(warehouses));
  return warehouse;
}

const createWarehouse = (reqBody) => {
  const warehouses = readFromWarehousesFile();
  const {
    warehouseName,
    address,
    city,
    country,
    contactName,
    position,
    phone,
    email
  } = reqBody;
  const warehouse = {
    id: uuidv4(),
    name: warehouseName,
    address: address,
    city: city,
    country: country,
    contact: {
      name: contactName,
      position: position,
      phone: formatPhoneNumber(phone.replace(/\D/g, "")),
      email: email
    }
  }
  warehouses.push(warehouse);
  fs.writeFileSync(warehousesFile, JSON.stringify(warehouses, null, 2));
  return warehouses;
}

const sortBy = (paramString, queryString) => {

  const warehouses = readFromWarehousesFile();
  console.log(queryString)

  if (paramString === "warehouse" && queryString === "asc") {
    return warehouses.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (paramString === "address" && queryString === "asc") {
    return warehouses.sort((a, b) => a.address.localeCompare(b.address))
  }

  if (paramString === "name" && queryString === "asc") {
    return warehouses.sort((a, b) => a.contact.name.localeCompare(b.contact.name))
  }

  if (paramString === "info" && queryString === "asc") {
    return warehouses.sort((a, b) => a.contact.email.localeCompare(b.contact.email))
  }

  if (paramString === "warehouse" && queryString === "desc") {
    return warehouses.sort((a, b) => b.name.localeCompare(a.name))
  }

  if (paramString === "address" && queryString === "desc") {
    return warehouses.sort((a, b) => b.address.localeCompare(a.address))
  }

  if (paramString === "name" && queryString === "desc") {
    return warehouses.sort((a, b) => b.contact.name.localeCompare(a.contact.name))
  }

  if (paramString === "info" && queryString === "desc") {
    return warehouses.sort((a, b) => b.contact.email.localeCompare(a.contact.email))
  }

  return false;
}

const findWarehouses = (query) => {
  const warehouses = readFromWarehousesFile();
  const warehousesFound = warehouses.filter(warehouse => {
    return warehouse.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || warehouse.address.toLowerCase().indexOf(query.toLowerCase()) > -1 || warehouse.city.toLowerCase().indexOf(query.toLowerCase()) > -1 || warehouse.country.toLowerCase().indexOf(query.toLowerCase()) > -1 || warehouse.contact.name.toLowerCase().indexOf(query.toLowerCase()) > -1 || warehouse.contact.email.toLowerCase().indexOf(query.toLowerCase()) > -1 || warehouse.contact.phone.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
  return warehousesFound;
}

module.exports = {
  readFromWarehousesFile,
  updateWarehouse,
  reqBodyIsValid,
  findOne,
  doesWarehouseExist,
  deleteOne,
  createWarehouse,
  sortBy,
  findWarehouses
};