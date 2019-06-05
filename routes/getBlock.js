let express = require('express');
let Client = require('bitcoin-core');
const client = new Client({
    network: 'regtest',
    host: 'localhost:8080',
    username: 'group1',
    password: 'z5dg6KZAM41LDQNDzdMP9pGsbysV5dk3nvB548BL4lQ=',
    port: 8080
});

var router = express.Router();

/* GET home page. */
router.get('/balance', function(req, res, next) {
    client.getMemoryPoolContent((block) => res.send(block));
    //let balance = new Client.getBalance('*', 0);
    //res.send(balance)
});

module.exports = router;
