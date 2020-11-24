const express = require('express');
const router = express.Router();

const warehousesController = require('../controllers/warehousesController');


router.get('/', warehousesController.getAllWarehouses);



// Export the Router------------------------------
module.exports = router;




