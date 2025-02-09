# FlightTrackerCLI

## Description

FlightTrackerCLI is a command-line application that helps you find flights departing from your nearby airport. It provides real-time information about flight schedules, destinations, and other relevant details to make your travel planning easier.

## Technologies Used

- Node.js
- JavaScript
- yargs
- chalk

## External Dependencies

FlightTrackerCLI relies on the following external dependencies:

- `jest`: A JavaScript testing framework.
- `@inquirer/prompts`: A collection of common interactive command-line prompts.
- `axios`: A promise-based HTTP client for the browser and Node.js.
- `chalk`: A library for styling terminal output.
- `yargs`: A library for building command-line interfaces.

## Commands

FlightTrackerCLI provides the following commands:

- `findIATACode <IATACode>`: Find the IATA Identifier of an airport.

  - **Arguments**:
    - `IATACode`: The IATA code of the airport.
  - **Example**: `flighttracker findIATACode JFK`

- `findFlights <IATACode>`: Find the first 5 flights leaving the provided airport.
  - **Arguments**:
    - `IATACode`: The IATA code of the airport.
  - **Example**: `flighttracker findFlights JFK`

## How to Contribute

We welcome contributions to improve FlightTrackerCLI! Here are some ways you can contribute:

1. **Fork the repository**: Click the "Fork" button at the top right of the repository page to create a copy of the repository on your GitHub account.
2. **Clone the repository**: Clone your forked repository to your local machine using `git clone https://github.com/your-username/FlightTrackerCLI.git`.
3. **Create a new branch**: Create a new branch for your feature or bug fix using `git checkout -b your-branch-name`.
4. **Make your changes**: Implement your changes and commit them with descriptive messages.
5. **Push your changes**: Push your changes to your forked repository using `git push origin your-branch-name`.
6. **Create a pull request**: Open a pull request from your branch to the main repository. Provide a clear description of your changes and why they are necessary.

Please make sure to follow the project's coding standards and write tests for any new features or bug fixes.

## Pull Request Requirements

Before a pull request (PR) can be merged, it must meet the following requirements:

1. **Pass all tests**: Ensure that all existing and new tests pass. You can run the tests using the command `npm test`.
2. **Code review**: The PR must be reviewed and approved by at least one code maintainer.
3. **Follow coding standards**: Make sure your code adheres to the project's coding standards and guidelines.
4. **Update documentation**: If your changes affect the documentation, update it accordingly.

## Obtaining an API Key from Aviationstack

To use the Aviationstack API, you need to obtain an API key. Follow these steps to get your key:

1. Go to the [Aviationstack website](https://aviationstack.com/).
2. Click on the "Get API Key" button.
3. Sign up for an account or log in if you already have one.
4. Once logged in, navigate to the API section of your account.
5. Copy your API key and add it to your `.env` file as `AVIATIONSTACK_API_KEY`.
