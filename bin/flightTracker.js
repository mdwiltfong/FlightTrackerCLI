#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");
var options = yargs(process.argv.slice(2))
  .usage("Usage: flighttracker <command> [options]")
  .command(
    "login [key]",
    "Login to OpenSky API Using username and password stored in BitWarden.",
    (yargs) => {
      yargs
        .positional("key", {
          describe: "BitWarden Key",
          type: "string",
        })
        .option("manual", {
          alias: "m",
          demandOption: false,
          type: "boolean",
        });
    },
    (argv) => {
      if (argv["manual"] || argv.m) {
        // Logic for manual login
        console.log(chalk.green("Manually logging in"));
        return;
      }
      if (!argv.key) {
        console.log(
          chalk.red("BitWarden key is required for automatic login.")
        );
        process.exit(1);
      }
      console.log(chalk.green("Loading credentials from BitWarden..."));
      // Add your BitWarden login logic here
    }
  )
  .command(
    "findIATACode [name]",
    "Find the IATA Identifier of an airport",
    (yargs) => {
      yargs.positional("airportName", {
        describe:
          "The airport name as you know. For example John F. Kennedy airport",
        type: "string",
      });
    },
    (argv) => {
      if (argv["name"]) {
        console.log(chalk.green("Looking for IATA code"));
        return;
      }
      console.log(chalk.red("No airport name provided"));
    }
  )
  .command(
    "findFlights [IATACode]",
    "Find the first 5 flights leaving the provided airport",
    (yargs) => {
      yargs.positional("IATACode", {
        describe: "Provide the IATA code of the airport",
        type: "string",
      });
    },
    (argv) => {
      if (argv["IATACode"]) {
        console.log(chalk.green("Looking up flights..."));
        return;
      }
      console.log(chalk.red("A IATACode was not provided"));
    }
  )
  .demandCommand(1, chalk.red("You need at least one command before moving on"))
  .parse();

console.log(options);
