let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const timerButton = document.querySelectorAll('.timer__button');

timerButton.forEach((button) => {
	button.addEventListener('click', function(e){
		clearInterval(countdown);
		timerDisplay.textContent = '0:00'
		timer(e.target.dataset.time);
	});
});

const timer = (seconds) => {
	const now = Date.now();
	const then = now + seconds * 1000;
	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);
		displayTimeLeft(secondsLeft);
		secondsLeft <= 0 ? clearInterval(countdown) : '';
	}, 1000);

}

function displayTimeLeft(secondsLeft){
	const minutes = Math.floor(secondsLeft / 60);
	const seconds = secondsLeft % 60;
	const display = `${minutes}:${seconds}`
	timerDisplay.textContent = display;
}

timer(10);