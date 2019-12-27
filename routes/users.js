const express = require('express');

const router = express.Router();
const userService = require('../services/user_service');
// const users = [];
/* GET users listing. */
router.get('/', (req, res) => {
  const users = userService.getAllUsers();
  res.locals.users = users;
  res.render('user');
});
router.post('/', (req, res) => {
  const { firstName, lastName, age } = req.body;
  const u = userService.addNewUser(firstName, lastName, age);
  res.json(u);
});
// router.route('/')
//   .get((req, res) => {
//     res.json(users);
//   })
//   .post((req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.json(users);
//   });
module.exports = router;
