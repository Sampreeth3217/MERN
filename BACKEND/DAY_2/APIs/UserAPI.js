const express = require('express');
const UserApp = express.Router();

// Middleware
UserApp.use(express.json());

const middleware_1 = (req, res, next) => {
  console.log('middleware_1');
  next();
};

const middleware_2 = (req, res, next) => {
  console.log('middleware_2');
  next();
};

UserApp.use(middleware_1);
UserApp.use(middleware_2);

// Test data
let userList = [
  { id: 1, name: 'Sam_1' },
  { id: 2, name: 'Sam_2' }
];

UserApp.get('/users', (req, res) => {
  res.send({
    message: 'usersList',
    payload: userList
  });
});

UserApp.get('/users/:id', (req, res) => {
  let id = req.params.id;
  let user = userList.find(user => user.id == id);
  if (user) {
    res.send({
      message: 'userDetails',
      payload: user
    });
  } else {
    res.send({ message: 'user not found' });
  }
});

UserApp.post('/users', (req, res) => {
  let user = req.body;
  userList.push(user);
  res.send({
    message: 'user added successfully',
    payload: userList
  });
});

UserApp.put('/user', (req, res) => {
  let user = req.body;
  let id = user.id;
  let index = userList.findIndex(user => user.id == id);
  if (index == -1) {
    res.send({ message: 'user not found' });
  } else {
    userList[index] = user;
    res.send({
      message: 'user updated successfully',
      payload: userList
    });
  }
});

UserApp.delete('/users', (req, res) => {
  let user = req.body;
  let id = user.id;
  let index = userList.findIndex(user => user.id == id);
  if (index == -1) {
    res.send({ message: 'user not found' });
  } else {
    userList.splice(index, 1);
    res.send({
      message: 'user deleted successfully',
      payload: userList
    });
  }
});

module.exports = UserApp;
