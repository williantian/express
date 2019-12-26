const express = require('express');

const router = express.Router();
const users = [];
/* GET users listing. */
router.route('/')
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    const user = req.body;
    users.push(user);
    res.json(users);
  });
module.exports = router;
