const {Task, User} = require('../models')

module.exports.createTask = async(req, res, next) => {
    try {
        const {body, getUserInstance} = req;
        const result = await getUserInstance.createTask(body)
        return res.status(201).send(result);
    } catch (error) {
       next(error); 
    }
}

module.exports.getAllUserTasks = async(req, res, next) => {
    try {
        const {getUserInstance} = req;
        const tasks = await getUserInstance.getTasks();
        return res.status(200).send(tasks);
    } catch (error) {
        next(error);
    }
}

module.exports.getCountofTasks = async(req, res, next) => {
    try {
        const {getUserInstance} = req;
        const tasks = await getUserInstance.countTasks();
        return res.status(200).send(`${tasks}`);
    } catch (error) {
        next(error);
    }
}