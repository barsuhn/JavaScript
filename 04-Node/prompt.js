import createPrompt from "prompt-sync"
let name = createPrompt()("What is your name? ")
console.log(`Hello ${name}!`)