
const landingPageRouter = require('express').Router();
const controller = require('../controllers/landingPage.controller');

landingPageRouter.get('/', controller.renderMainPage)

landingPageRouter.post('/' ,controller.renderPostContactUsFrom)


module.exports = landingPageRouter ;