import inquirer from "inquirer";
import chalk from "chalk";
import terminalKit from "terminal-kit";

const print = console.log;
const terminal = terminalKit.terminal;

async function main() {
  terminal.clear();

  let who = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What ist your name?"
    },
  ]);

  print(`Hello ${chalk.red(who.name)}`);

  let favorite = await inquirer.prompt([
    {
      type: 'input',
      name: 'color',
      message: "What ist your favorite color?",
      default: 'red'
    },
    {
      type: 'list',
      name: 'animals',
      message: "What are your favorite animals?",
      choices: ["dogs", "cats", "birds", "horses", "penguins"],
    },
    {
      type: 'number',
      name: 'number',
      message: 'What is your lucky number?',
      default: '42'
    }
  ]);

  print(`${chalk.red(who.name)}s favorite color is ${chalk.blue(favorite.color)}.`);
  print(`${chalk.red(who.name)}s favorite animals are ${chalk.green(favorite.animals)}.`);
  print(`${chalk.red(who.name)}s lucky number is ${chalk.yellow(favorite.number)}.`);
}

await main();