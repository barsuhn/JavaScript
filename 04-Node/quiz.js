import inquirer from "inquirer";

let oarr = [
  {
    type: 'list',
    name: 'animals',
    message: "What are your favorite animals?",
    choices: ["dogs", "cats", "birds", "horses", "penguins"],
  },
]

const quizItem = {
  question: "Welche Farbe hat der Himmel?",
  answers: ["rot", "gelb", "grün", "blau"],
  correct: 3,
  points: 0,
  penalty: -10
}

async function ask(questionItem) {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'attempt',
      message: questionItem.question,
      choices: questionItem.answers
    }
  ]);

  const correct = questionItem.answers[questionItem.correct];
  const attempt = answer.attempt;
  if (attempt !== correct) {
    console.log(`Die Antwort ${attempt} ist falsch! Du Depp. Dafür gibt es ${questionItem.penalty} Strafpunkte.`)
  } else {
    console.log(`Die Antwort ist richtig! Gut gemacht! Dafür gibt es ${questionItem.points} ${questionItem.points == 1 ? "Punkt" : "Punkte"}.`)
  }
}

await ask(quizItem)