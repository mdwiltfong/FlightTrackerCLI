const { FlightTrackerCLI } = require("../bin/utils/utils.js");

const mockAxiosInstance = {
  get: jest.fn((endpoint, options) => {
    const mockData = {
      "/flights": {
        data: [
          {
            flight_date: "2019-12-12",
            flight_status: "active",
            departure: {
              airport: "San Francisco International",
              timezone: "America/Los_Angeles",
              iata: "SFO",
              icao: "KSFO",
              terminal: "2",
              gate: "D11",
              delay: 13,
              scheduled: "2019-12-12T04:20:00+00:00",
              estimated: "2019-12-12T04:20:00+00:00",
              actual: "2019-12-12T04:20:13+00:00",
              estimated_runway: "2019-12-12T04:20:13+00:00",
              actual_runway: "2019-12-12T04:20:13+00:00",
            },
            arrival: {
              airport: "Dallas/Fort Worth International",
              timezone: "America/Chicago",
              iata: "DFW",
              icao: "KDFW",
              terminal: "A",
              gate: "A22",
              baggage: "A17",
              delay: 0,
              scheduled: "2019-12-12T04:20:00+00:00",
              estimated: "2019-12-12T04:20:00+00:00",
              actual: null,
              estimated_runway: null,
              actual_runway: null,
            },
            airline: {
              name: "American Airlines",
              iata: "AA",
              icao: "AAL",
            },
            flight: {
              number: "1004",
              iata: "AA1004",
              icao: "AAL1004",
              codeshared: null,
            },
            aircraft: {
              registration: "N160AN",
              iata: "A321",
              icao: "A321",
              icao24: "A0F1BB",
            },
            live: {
              updated: "2019-12-12T10:00:00+00:00",
              latitude: 36.2856,
              longitude: -106.807,
              altitude: 8846.82,
              direction: 114.34,
              speed_horizontal: 894.348,
              speed_vertical: 1.188,
              is_ground: false,
            },
          },
        ],
      },
      "/airports": {
        data: [
          {
            airport_name: "Anaa",
            iata_code: "AAA",
            icao_code: "NTGA",
            latitude: "-17.05",
            longitude: "-145.41667",
            geoname_id: "6947726",
            timezone: "Pacific/Tahiti",
            gmt: "-10",
            phone_number: null,
            country_name: "French Polynesia",
            country_iso2: "PF",
            city_iata_code: "AAA",
          },
        ],
      },
    };
    return Promise.resolve({
      data: mockData[endpoint],
      status: 200,
    });
  }),
};

const flightTrackerCLI = new FlightTrackerCLI("API_KEY", mockAxiosInstance);

describe("FlightTrackerCLI methods", () => {
  it("findIATACode", async () => {
    const resp = await flightTrackerCLI.findIATACode("test");
    expect(resp).not.toBeNull();
  });
  it("findFlights", async () => {
    const resp = await flightTrackerCLI.findFlights("test");
    expect(resp).not.toBeNull();
  });
});
