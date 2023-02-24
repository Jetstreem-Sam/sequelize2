const {Router} = require('express');
const UserController = require('../controller/User.controller');
const TaskController = require('../controller/Task.controller');

const router = Router();

router.post('/user', UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:id', UserController.FindOnePK);
router.delete('/user/:id', UserController.deleteByPK);
router.put('/user/:id', UserController.updateUser);
router.post('/task/:userId', TaskController.createTask);

module.exports = router;