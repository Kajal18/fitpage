'use strict';
const {  RestError } = require('../middleware/error/customError');
const Location = require('../models/location.model');
const weatherApi = require('../remotes/weather.ts')
exports.findAll = async function (req, res) {
    try {
        const location = await Location.findAll();
        console.log('controller');
        console.log('res', location);
        res.send(location);
    } catch (err) {
        res.send(err);
    }
};

exports.create = async function (req, res) {
    const new_location = new Location(req.body);
    console.log('create', new_location);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        try {
            const location = await Location.create(new_location);
            res.json({ error: false, message: "Location added successfully!", data: location });
        } catch (err) {
            res.send(err);
        }
    }
};

exports.findById = async function (req, res) {
    try {
        const location = await Location.findById(req.params.id);
        res.json(location);
    } catch (err) {
        res.send(err);
    }
};

exports.update = async function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        try {
            await Location.update(req.params.id, new Location(req.body));
            res.json({ error: false, message: 'Location successfully updated' });
        } catch (err) {
            res.send(err);
        }
    }
};

exports.delete = async function (req, res) {
    try {
        await Location.delete(req.params.id);
        res.json({ error: false, message: 'Location successfully deleted' });
    } catch (err) {
        res.send(err);
    }
};

exports.history = async function (req, res) {
    try {
        const location = await Location.findByRange(req.query.days);
        res.send(location);
    } catch (err) {
        res.send(err);
    }
};

exports.weather = async function (req, res, next) {
    try {
        const locationData = await Location.findById(req.params.id);
        
        if(!locationData.length){
            throw RestError('Invalid location', 400)
        }
        const weatherresp = await weatherApi(locationData[0].latitude, locationData[0].longitude)
          
        if(!weatherresp){
            throw RestError('Weather forecast not availale', 400)
        }
        res.send(weatherresp)
    } catch (err) {
        next(err);

        
    }
};
