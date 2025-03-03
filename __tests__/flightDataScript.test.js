const fs = require("node:fs/promises");
const path = require("node:path");
const GenerateAirportsFile = require("../flightData/scripts/GenerateAirportsFile");
describe("Airports.json file", () => {
  const filePath = path.resolve(__dirname, "../bin/assets/Airports.json");
  beforeAll(async () => {
    try {
      await fs.unlink(filePath);
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new Error(error);
      }
    }
  });
  afterAll(async () => {
    fs.unlink(filePath);
  });
  it("should contain data", async () => {
    await GenerateAirportsFile();
    const airportsJSON = await fs.readFile(filePath);
    expect(airportsJSON).toBeDefined();
    expect(Object.keys(airportsJSON).length).toBeGreaterThan(0);
  });
});
