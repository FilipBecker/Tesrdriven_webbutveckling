var express = require('express');
var router = express.Router();

let Users = [
    {name: "Johan", id: 2},
    {name: "Lisa", id: 10}
];

router.get('/', (req, res) => {
    res.json(Users);
});

router.get('/:id', (req, res) => {
    const user = Users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');

    res.json(user);
});


module.exports = router;