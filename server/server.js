const express = require('express');
const app = express();
app.use(express.json());

const warehousesRoutes = require('./routes/WarehousesRoutes');
const inventoryRoutes = require('./routes/InventoryRoutes');



//DEFINING THE SERVER-----------------------------------------

const SERVER_PORT = 8080;



//CORS-------------------------------

app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



//USAGE OF MIDDLEWARE----------------------------------------

app.use('/warehouses', warehousesRoutes);

app.use('/inventory', inventoryRoutes);

app.use(express.static('files'));

app.use((req, res, next) => {
    console.log('request');
    next();
});



app.use((req, res, next) => {
    //VERIFYING ACTUAL JSON REQUEST FROM THE CLIENT
    if (req.method === 'POST' && req.headers['content-type'] !== 'application/json') {
        //RETURN ERROR
        return res.status(400).send('Server requires application.json');
    } else {
        next();
    }
});




//START THE SERVER LISTENING-------------------------------------------

app.listen(SERVER_PORT, () => {
    console.log('HELLO WORLD');
})