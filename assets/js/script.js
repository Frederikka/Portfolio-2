/*-- Start-screen -- */

const beginScreen = document.querySelector(".begin-screen");
const beginButton = document.getElementById("begin-button");
const quizArea = document.querySelector(".quiz-area");
const nextQuestion = document.querySelector(".question-number-area");
const question = document.getElementById("question-area");
const html = "Question";
const nextButton = document.getElementById("btn-next");
const scoresArea = document.querySelector(".scores-area");
beginButton.addEventListener("click", (event) => {
  quizAreaShow();
}); 

nextButton.addEventListener("click", (event) => {
  questionsnumberArea();
});

function quizAreaShow() {
  console.log('quiz has loaded')
  beginButton.style.display = 'none';
  quizArea.style.display = 'inline-block';
  scoresArea.style.display = 'block';
  startQuiz();
}

function startQuiz() {
  console.log('now we start the quiz...')


  //log up stuff from your question array (in a loop) and squirt in info into elements
  // wait for click on one of teh options - update score and loop 
};


/** */
function questionsnumberArea () {
    for (let i = 0; i < questionsArray.length; i++)
  {
    nextQuestion.innerHTML= "Question" + questionsArray.length + "of 3";

  }
  console.log('Question'[i] + ' of 3 has loaded');
};

/*-- code to finish

questionnumberArea

function correctAnswer () {
  

}

function userAnswer () {
  document.getElementsByClassName(".question-option");

  let correctAttempt = 

  if (correct = green) {

  } else {
    red
  }

}

function incrementScore() {

  let oldScore = parseInt(document.getElementById("score").innerText);
  document.getElementById("score").innerText = ++oldScore;

}

(displayNext = () => {
		nextQuestion += 1;
		//if last question
		if (questionCount == quizArray.length) {
			
			quizArea.remove;
    } -- add to nextbutton event listener?


/*-- Quiz questions and options */
const questionsArray = [
    {
        id: "0",
        question: "When was the book 'To Kill a Mockingbird' by Harper Lee published?",
        options: ["1950", "1960", "1970", "Rodents"],
        correct: "1960"
    },
    {
        id: "1",
        question: "What does the Richter scale measure?",
    options: ["Wind speed", "Temperature", "Earthquake intensity"],
        correct: "Earthquake intensity"
    },
    {
        id: "2",
        question: "When were Guy Fawkes and The Gunpowder Plot discovered?",
        options: ["1505", "1605", "1705", "1809"],
        correct: "1605"
    }
]