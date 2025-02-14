const fs = require("node:fs/promises");
const generateAirPortData = require("../flightData/scripts/index");
console.log(generateAirPortData);
describe("Airports.json file", () => {
  beforeAll(async () => {
    try {
      await fs.unlink(path.resolve(__dirname, "../Airports.json"));
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new Error(error);
      }
    }
  });
  it("should contain data", async () => {
    await generateAirPortData();
    expect(airportsJSON).toBeDefined();
    expect(Object.keys(airportsJSON).length).toBeGreaterThan(0);
  });
});
