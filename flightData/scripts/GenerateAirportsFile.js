const fs = require("node:fs");
const readline = require("node:readline");
const hashMap = new Map();

module.exports = async function GenerateAirportsFile() {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream("./flightData/RawFlightData.txt", {
      encoding: "utf8",
    });
    const writeStream = fs.createWriteStream("./bin/assets/Airports.json");

    const rl = readline.createInterface({
      input: fileStream,
      output: writeStream,
    });
    rl.on("line", (line) => {
      const lineArray = line.split(",");
      const airportName = lineArray[1].slice(1, lineArray[1].length - 1);
      const IATACode = lineArray[4].slice(1, lineArray[4].length - 1);
      const airport = {
        airportName: airportName,
        IATACode: IATACode,
      };
      if (hashMap.has(airportName[0])) {
        const airports = hashMap.get(airportName[0]);
        airports.push(airport);
        hashMap.set(airportName[0], airports);
        return;
      }
      hashMap.set(airportName[0], [airport]);
    });
    rl.on("close", () => {
      const obj = Object.fromEntries(hashMap);
      const json = JSON.stringify(obj, null, 2); // Pretty print with 2 spaces
      writeStream.write(json);
      writeStream.end();
      resolve();
    });
    rl.on("error", (err) => {
      reject(err);
    });
  });
};
