const express = require('express');

const router = express.Router();
const UserService = require('../services/user_service');
// const users = [];
/* GET users listing. */
router.get('/', (req, res) => {
  const users = UserService.getAllUsers();
  res.locals.users = users;
  res.render('user');
});
router.post('/', (req, res) => {
  const { firstName, lastName, age } = req.body;
  const u = UserService.addNewUser(firstName, lastName, age);
  res.json(u);
});
router.get('/:userId/', (req, res) => {
  console.log(req.params.userId);
  const user = UserService.getUserById(Number(req.params.userId));
  res.locals.user = user;
  res.render('user');
});
router.post('/:userId/subscription', (req, res, next) => {
  try {
    const sub = UserService.createSubscription(Number(req.params.userId), req.body.url);
    res.json(sub);
  } catch (e) {
    next(e);
  }
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
