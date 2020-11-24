const warehousesModel = require('../models/WarehousesModel');

const getAllWarehouses = (req, res) => {
    res.status(200).json(warehousesModel.readFromWarehousesFile());
}

module.exports = {
    getAllWarehouses
}