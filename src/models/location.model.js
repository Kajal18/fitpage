'use strict';
const dbConn = require('../../config/db.config');
const util = require('util');
const queryAsync = util.promisify(dbConn.query).bind(dbConn);

// Location object create
class Location {
    constructor(location) {
        this.name = location.name;
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        this.created_at = new Date();
        this.updated_at = new Date();
    }

    static async create(location) {
        try {
            const res = await queryAsync("INSERT INTO locations SET ?", location);
            console.log(res.insertId);
            return res.insertId;
        } catch (err) {
            console.log("error: ", err);
            throw err;
        }
    }

    static async findById(id) {
        try {
            const res = await queryAsync("SELECT * FROM locations WHERE id = ?", id);
            return res;
        } catch (err) {
            console.log("error: ", err);
            throw err;
        }
    }

    static async findAll() {
        try {
            const res = await queryAsync("SELECT * FROM locations");
            console.log('Locations: ', res);
            return res;
        } catch (err) {
            console.log("error: ", err);
            throw err;
        }
    }

    static async update(id, location) {
        try {
            const res = await queryAsync("UPDATE locations SET name=?, latitude=?, longitude=? WHERE id = ?", [location.name, location.latitude, location.longitude, id]);
            return res;
        } catch (err) {
            console.log("error: ", err);
            throw err;
        }
    }

    static async delete(id) {
        try {
            const res = await queryAsync("DELETE FROM locations WHERE id = ?", [id]);
            return res;
        } catch (err) {
            console.log("error: ", err);
            throw err;
        }
    }

    static async findByRange(days) {
        try {
            const res = await queryAsync(`SELECT * FROM locations WHERE updated_at >= (CURDATE() - INTERVAL ${days} DAY)`);
            console.log({ res });
            return res;
        } catch (err) {
            console.log("error: ", err);
            throw err;
        }
    }
}

module.exports = Location;
