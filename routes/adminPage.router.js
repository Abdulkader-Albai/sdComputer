const adminRouter = require('express').Router();
const controller = require('../controllers/adminPage.controller');

adminRouter.get('/', controller.renderDashBoard)




adminRouter.get('/messages',controller.renderMessages)


module.exports = adminRouter ;