var express = require('express');
var router = express.Router();

let Users = [
    {name: "Johan", id: 2},
    {name: "Lisa", id: 10}
];

router.get('/', (req, res) => {
    res.json(Users);
});

module.exports = router;