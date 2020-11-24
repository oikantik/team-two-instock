const warehousesModel = require('../model/WarehousesModel');

const getAllWarehouses = (req, res) => {
    res.status(200).json(warehousesModel.readFromWarehousesFile());
}

module.exports = {
    getAllWarehouses
}
