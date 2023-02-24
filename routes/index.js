const {Router} = require('express');
const UserController = require('../controller/User.controller');
const TaskController = require('../controller/Task.controller');
const {getUserInstance, validateUser} = require('../middlewares/user.mv');
const {validateTask} = require('../middlewares/task.mv');

const router = Router();

router.post('/user', validateUser, UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:userId', getUserInstance, UserController.FindOnePK);
router.delete('/user/:userId', UserController.deleteByPK);
router.put('/user/:userId', getUserInstance, UserController.updateUser);


router.post('/task/:userId', validateTask, getUserInstance, TaskController.createTask);
router.get('/task/:userId', getUserInstance, TaskController.getAllUserTasks);
router.get('/task-count/:userId', getUserInstance, TaskController.getCountofTasks);


module.exports = router;