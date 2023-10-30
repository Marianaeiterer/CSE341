const routes = require('express').Router();
const lession1Controller = require('../controllers/lesson1');
 
routes.get('/', lession1Controller.mariRoute); 
routes.get('/hannah', lession1Controller.hannaRoute);

module.exports = routes;