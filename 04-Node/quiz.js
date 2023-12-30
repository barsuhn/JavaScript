import inquirer from "inquirer";

const quizItems = [
  {
    question: "Welche Farbe hat der Himmel?",
    answers: ["rot", "gelb", "grün", "blau"],
    correct: 3,
    points: 0,
    penalty: -10
  },
  {
    question: "Wer war 2023 Präsident der USA?",
    answers: ["Emanuel Trump", "Joe Biden", "Donald Black", "Joe Obama"],
    correct: 1,
    points: 5,
    penalty: -5
  },
  {
    question: "Was war 2023 das Spiel des Jahres?",
    answers: ["Baldur's Gate 1", "Baldur's Gate 2", "Baldur's Gate 3", "Baldur's Gate 25"],
    correct: 2,
    points: 15,
    penalty: -5
  },
  {
    question: "Welches Spiel war 1998 auf Platz 1 der Media Control Charts?",
    answers: ["Baldur's Gate 1", "Baldur's Gate 2", "Baldur's Gate 3", "Baldur's Gate 25"],
    correct: 0,
    points: 25,
    penalty: 0
  },
  {
    question: "Was war 2001 das Spiel des Jahres?",
    answers: ["Baldur's Gate 1", "Baldur's Gate 2", "Diablo 1", "Diablo 2"],
    correct: 3,
    points: 35,
    penalty: 0
  },
];

function contains(array, item) {
  for (let arrayItem of array)
  {
    if (arrayItem == item)
      return true;
  }

  return false;
}

function pluralize(singularText, count) {
  if (count === 1) {
    return singularText
  }

  return singularText + 'e';
}

async function ask(quizItem) {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'attempt',
      message: quizItem.question,
      choices: quizItem.answers
    }
  ])

  const correct = quizItem.answers[quizItem.correct]
  const attempt = answer.attempt

  if (attempt !== correct) {
    console.log(`Die Antwort ${attempt} ist falsch! Du Depp. Dafür gibt es ${Math.abs(quizItem.penalty)} ${pluralize("Strafpunkt", Math.abs(quizItem.penalty))}.`)
    return quizItem.penalty;
  } else {
    console.log(`Die Antwort ist richtig! Gut gemacht! Dafür gibt es ${quizItem.points} ${pluralize("Punkt", quizItem.points)}.`)
    return quizItem.points
  }
}

async function quiz(questionCount)
{
  const itemCount = quizItems.length

  if (questionCount > itemCount) {
    console.log(`Ich kann maximal ${itemCount} Fragen stellen!`)
    questionCount = itemCount
  }

  let usedItems = []
  let points = 0

  while (usedItems.length < questionCount)
  {
    const randomIndex = Math.floor((Math.random() * itemCount))

    if (contains(usedItems, randomIndex))
      continue

    usedItems.push(randomIndex)

    const quizItem = quizItems[randomIndex]

    let questionPoints = await ask(quizItem)

    points = points + questionPoints;
  }

  console.log(`Du hast ${points} Punkte erreicht!`)
}

await quiz(25)