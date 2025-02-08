
// preconfigured axios templates for dependency injection

const axios = require("axios")

// AviationStack API (main api)

const aviationstackAPI = axios.create({
    baseURL: "https://api.aviationstack.com/v1",
    timeout: 5000,
    // flightTracker.axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
    // ^ Keeping this just for reference
});

module.exports = { aviationstackAPI };
