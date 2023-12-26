import createPrompt from "prompt-sync";
import inquirer from "inquirer";
import chalk from "chalk";
import terminalKit from "terminal-kit";

const prompt = createPrompt();
const print = console.log;
const terminal = terminalKit.terminal;

async function main() {
  terminal.clear();

  let name = prompt("What is your name? "); //, {echo: '*'});

  print(`Hello ${chalk.red(name)}`);  

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

  print(`${chalk.red(name)}s favorite color is ${chalk.blue(favorite.color)}.`);
  print(`${chalk.red(name)}s favorite animals are ${chalk.green(favorite.animals)}.`);
  print(`${chalk.red(name)}s lucky number is ${chalk.yellow(favorite.number)}.`);
}

await main();