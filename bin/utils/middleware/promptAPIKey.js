const inquirer = require("@inquirer/prompts");

async function promptAPIKey(argv) {
  if (!argv.apiKey) {
    const input = await inquirer.password({
      message:
        "An API Key from aviation stack is needed. What is your API Key?",
      mask: true,
    });
    if (input.trim() <= 0) {
      console.log(chalk.red("Please provide an API Key"));
    }
    return {
      apiKey: input,
    };
  }
}

module.exports = promptAPIKey;
