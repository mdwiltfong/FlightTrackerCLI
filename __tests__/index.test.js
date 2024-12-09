const { exec } = require("child_process");
const { error } = require("console");
const { stdout, stderr } = require("process");

describe("Smoke Test", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
  it("should run the CLI", (done) => {
    exec("node ./bin/flightTracker.js --help", (error, stdout, stderr) => {
      expect(error).toBe(null);
      expect(stderr).toBe("");
      expect(stdout).not.toBeNull();
      done();
    });
  });
});
const cliCommands = [
  ["login", null, "test"],
  ["login", "m", "test"],
  ["findIATACode", null, "test"],
  ["findFlights", null, "test"],
];

describe.each(cliCommands)(
  "CLI can run command %s with %s flag and %s input",
  (command, flag, input) => {
    it(`${command} should run with ${
      flag ? "no flag" : flag
    } and this input ${input} without errors`, () => {
      if (flag) {
        exec(
          `node ./bin/flightTracker.js ${command} -${flag} ${input}`,
          (error, stdout, stderr) => {
            expect(error).toBe(null);
            expect(stderr).toBe("");
            expect(stdout).not.toBeNull();
          }
        );
      } else {
        exec(
          `node ./bin/flightTracker.js ${command} ${input}`,
          (error, stdout, stderr) => {
            expect(error).toBe(null);
            expect(stderr).toBe("");
            expect(stdout).not.toBeNull();
          }
        );
      }
    });
  }
);
