import createPrompt from "prompt-sync";

const prompt = createPrompt();
const print = console.log;

async function main() {
  let name = prompt("What is your name? ");

  print(`Hello ${name}!`);
}

await main();