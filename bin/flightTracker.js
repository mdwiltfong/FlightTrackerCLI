#! /usr/bin/env node
const yargs = require("yargs");
const chalk = require("chalk");

const { aviationstackAPI, bitwardenAPI } = require("./api.js");
const { FlightTrackerCLI } = require("./utils/utils");

const flightTracker = new FlightTrackerCLI();

var options = yargs(process.argv.slice(2))
  .usage("Usage: flighttracker <command> [options]")
  .command(
    "login [name]",
    "Login to Aviationstack API Using the api key stored in your BitWarden vault. The Key must be stored as a note.",
    (yargs) => {
      yargs
        .positional("name", {
          describe: "BitWarden Note Nam",
          type: "string",
        })
        .option("manual", {
          alias: "m",
          description: "Manually pass API Key",
          type: "string",
        });
    },
    (argv) => {
      if (argv.m) {
        // Logic for manual login
        console.log(chalk.green("Storing API key locally and logging in..."));
        return;
      } else {
        if (!argv.name) {
          console.log(
            chalk.red(
              "The name of the note in BitWarden is required for automatic login."
            )
          );
          return;
        }
      }
      // Add your BitWarden login logic here
      // check axios instance
      if (flightTracker.axiosInstance !== bitwardenAPI) {
        flightTracker.axiosInstance = bitwardenAPI;
      }
      console.log(chalk.green("Loading credentials from BitWarden..."));
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

        // check for API key
        if(!flightTracker.apiKey) {
          console.log(chalk.red("Error: No API key entered."));
        }
        // make input lower case and remove leading and trailing whitespace
        argv["name"] = argv["name"].toLowerCase().trim();
        // check axios instance
        if (flightTracker.axiosInstance !== aviationstackAPI) {
          flightTracker.axiosInstance = aviationstackAPI;
        }
        // REQUIRES API KEY
        // flightTracker.findIATACode(argv['name'])
        console.log(chalk.green(flightTracker.findIATACode()));
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
        argv["IATACode"] = argv["IATACode"].toUpperCase().trim(); // make the IATA code uppercase and remove leading and trailing whitespace
        // check axios instance
        if (flightTracker.axiosInstance !== aviationstackAPI) {
          flightTracker.axiosInstance = aviationstackAPI;
        }
        
        console.log(chalk.green("Looking up flights..."));
        return;
      }
      console.log(chalk.red("A IATACode was not provided"));
    }
  )
  .demandCommand(1, chalk.red("You need at least one command before moving on"))
  .parse();

console.log(options);
