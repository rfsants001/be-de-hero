const express = require('express');

const OngController = require('./constrolers/OngController');

const IncidentController = require('./constrolers/IncidentController');

const ProfileController = require('./constrolers/ProfileController');

const SessionController = require('./constrolers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;