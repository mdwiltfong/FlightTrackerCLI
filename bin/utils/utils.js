
const axios = require("axios");

class FlightTrackerCLI {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://opensky-network.org/api',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  async findFlights(iataCode) {
    try {
      const response = await this.axiosInstance.get('flights', {
        params: {
          airport: iataCode,
        },
      });
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching flights:', error);
    }
  }

  async login(manualLogin = false, userName = "", passWord = "") {
    if (manualLogin) {
      // manual logic
    }
    else {
      // use axios to fetch login-related data
    }
  }
}

module.exports = FlightTrackerCLI;
