#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
const { promptAPIKey, flightTracker } = require("./utils/middleware");

yargs
  .middleware([promptAPIKey, flightTracker])
  .usage("Usage: $0 <command> [options]")
  .command(
    "findIATACode <IATACode>",
    "Find the IATA Identifier of an airport",
    (yargs) => {
      yargs.positional("airportName", {
        describe:
          "The airport name as you know. For example John F. Kennedy airport",
        type: "string",
      });
    },
    (argv) => {
      if (argv["IATACode"] && argv["IATACode"] != undefined) {
        // make input lower case and remove leading and trailing whitespace
        const airportName = argv["IATACode"].toLowerCase().trim();
        console.log(chalk.green(argv.flightTracker.findIATACode(airportName)));
        return;
      }
      console.log(chalk.red("No airport IATA Code provided"));
    }
  )
  .command(
    "findFlights",
    "Find the first 5 flights leaving the provided airport",
    (yargs) => {
      yargs.positional("IATACode", {
        describe: "Provide the IATA code of the airport",
        type: "string",
      });
    },
    (argv) => {
      if (argv["IATACode"]) {
        argv["IATACode"] = argv["IATACode"].toUpperCase().trim(); // make the IATA code uppercase and remove leading and trailing whitespace
        console.log(chalk.green(flightTracker.findFlights(argv["IATACode"])));
        return;
      }
      console.log(chalk.red("A IATACode was not provided"));
    }
  )
  .demandCommand(1, chalk.red("You need at least one command before moving on"))
  .parse();
