const axios = require("axios");
const chalk = require("chalk");

class FlightTracker {
  constructor(apiKey = null, axiosInstance) {
    this.apiKey = apiKey;
    this.axiosInstance = axiosInstance;
  }

  async findIATACode(airportName) {
    // check for api key
    if (!this.apiKey) {
      throw new Error(chalk.red("Error: API key is missing."));
    }
    try {
      const response = await this.axiosInstance.get("/airports", {
        params: {
          city: airportName,
          access_key: this.apiKey,
        },
      });

      if (response && response.status === 200 && response.data) {
        if (response.data.data && response.data.data.length > 0) {
          return `IATA Code for ${airportName}: ${response.data.data[0].iata_code}`;
        } else {
          console.log(
            chalk.red(
              `No IATA code found for the given airport name: ${airportName}`
            )
          );
        }
      } else {
        console.log(chalk.red("Error: Invalid response from API"));
      }
    } catch (error) {
      console.error(
        chalk.red("Error fetching IATA code:", error.message || error)
      );
    }
  }

  async findFlights(iataCode) {
    // check for api key
    if (!this.apiKey) {
      console.log(chalk.red("Error: API key is missing."));
      return;
    }
    try {
      const response = await this.axiosInstance.get("/flights", {
        params: {
          airport: iataCode,
        },
      });

      // return API response data or load it
      if (response && response.status === 200) {
        return response.data;
      } else {
        console.log(chalk.red("Error: Failed to retrieve flight data"));
      }
    } catch (error) {
      console.error("Error fetching flights:", error.message || error);
    }
  }

  async fetchAPIKey(iteName) {
    if (!iteName) {
      throw new Error(
        chalk.red(
          "Please provide the name of the item being fetched from BitWarden"
        )
      );
    }
    try {
      exec("bitwarden ");
    } catch (error) {}
  }
}

module.exports = FlightTracker;
