
/*-- Start-screen -- */

function beginScreen () {
	let beginScreen = document.querySelector(".begin-screen");
	let beginButton = document.getElementById("begin-button");
	let quizArea = document.getElementsByClassName("quiz-area")
	
	beginButton.addEventListener("click") {
		quizArea;
	}
}


window.onload=beginScreen();






/*-- Quiz questions and options */

const questionsArray = [
	{
		id: "0",
		question: "When was the book “To Kill a Mockingbird” by Harper Lee published?",
		options: ["1950", "1960", "1970", "Rodents"],
		correct: "1960"
	},

	{
		id: "1",
		question: "What does the Richter scale measure?",
		options: ["Wind speed", "Temperature", "Earthquake intensity”],
		correct: "Earthquake intensity"
	},

	{
		id: "2",
		question: " When were Guy Fawkes and The Gunpowder Plot discovered?”,
		options: ["1505", "1605", "1705",],
		correct: "1605"
	}
];


startButton.addEventListener("click", () => {
	startScreen.classList.add("hide");
	wrapper.classList.remove("hide");
	inital();
});

