const fs = require('fs');
const warehousesFile = './data/warehouses.json';

const readFromWarehousesFile = () => {
    const warehouses = fs.readFileSync(warehousesFile);
    return JSON.parse(warehouses);
}

module.exports = {
    readFromWarehousesFile
}