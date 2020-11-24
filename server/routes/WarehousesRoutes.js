const express = require('express');
const router = express.Router();

const warehousesController = require('../controller/WarehousesController');


router.get('/', warehousesController.getAllWarehouses);



// Export the Router------------------------------
module.exports = router;




