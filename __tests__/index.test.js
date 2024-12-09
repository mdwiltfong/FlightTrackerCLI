const { exec } = require("child_process");
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
