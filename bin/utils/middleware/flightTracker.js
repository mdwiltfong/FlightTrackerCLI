const FlightTracker = require("../FlightTracker");
const { aviationstackAPI } = require("../api");

function flightTracker(argv) {
  if (!argv.flightTracker) {
    if (!argv.apiKey) {
      throw new Error("No API key is provided");
    }
    const flightTracker = new FlightTracker(argv.apiKey, aviationstackAPI);
    return {
      flightTracker,
    };
  }
}

module.exports = flightTracker;
