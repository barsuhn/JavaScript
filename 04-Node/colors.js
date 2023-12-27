import createPrompt from "prompt-sync";
import chalk from "chalk";

const prompt = createPrompt();
const print = console.log;

async function main() {
  let name = prompt(chalk.green("What is your name? "));
  let secret = prompt(chalk.red("What is your secret? "), { echo: '*' });

  print(`Hello ${chalk.green(name)}!`);
  print(`Your secret contains ${chalk.red(secret.length)} characters.`);
}

await main();