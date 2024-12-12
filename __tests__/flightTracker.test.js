const { FlightTrackerCLI } = require("../bin/utils/utils.js");

const mockAxiosInstance = {
  get: jest.fn((endpoint, options) => {
    const mockData = {
      "/flights": {},
      "/airports": {
        data: [
          {
            iata_code: "AAAA",
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
});
