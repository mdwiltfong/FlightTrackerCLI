
const axios = require("axios");
const chalk = require("chalk");

class FlightTrackerCLI {
  constructor(apiKey = null, axiosInstance) {
    this.apiKey = apiKey;
    this.axiosInstance = axiosInstance;
  }

  async findIATACode(airportName) {

    try {
      const response = await this.axiosInstance.get('/airports', {
        params: {
          city: airportName,
          // access_key: 'YOUR_API_KEY',
        },
      });

      if (response && response.status === 200 && response.data) {
        if(response.data.data && response.data.data.length > 0) {
          console.log(`IATA Code for ${airportName}: ${response.data.data[0].iata_code}`);
        }
        else {
          console.log(chalk.red(`No IATA code found for the given airport name: ${airportName}`));
        }
      }
      else {
        console.log(chalk.red("Error: Invalid response from API"));
      }

    } catch (error) {
      console.error('Error fetching IATA code:', error.message || error);
    }
  }

  async findFlights(iataCode) {
    
    try {
      const response = await this.axiosInstance.get('flights', {
        params: {
          airport: iataCode,
        },
      });

      // return API response data or load it
      if (response && response.status === 200) {
        console.log(`Flights at ${iataCode}:`);
        console.log(response.data); // log the data
        return response.data;
      }
      else {
        console.log(chalk.red("Error: Failed to retrieve flight data"));
      }
    } catch (error) {
      console.error('Error fetching flights:', error.message || error)
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

module.exports = { FlightTrackerCLI };
