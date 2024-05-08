const express = require('express')
const router = express.Router()
const locationController = require('../controllers/location.controller');

router.get('/locations/history', locationController.history);

// Retrieve all locations
router.get('/locations', locationController.findAll);

// Create a new location
router.post('/locations/create', locationController.create);

// Retrieve a single location with id
router.get('/locations/:id', locationController.findById);

// Update a location with id
router.put('/locations/:id', locationController.update);

// Delete a location with id
router.delete('/locations/:id', locationController.delete);

router.get('/weather/:id', locationController.weather)
module.exports = router