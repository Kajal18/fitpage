const axios = require('axios');


async function weatherApi(lat, long) {
    try {
        const resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=f59a7fbaece94b4b972165953240605&q=${lat},${long}&aqi=no`);
        return resp.data; // Return only the data from the response
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error for handling it outside this function
    }
}

module.exports = weatherApi;
