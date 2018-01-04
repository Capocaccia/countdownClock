let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const timerButton = document.querySelectorAll('.timer__button');
const minuteForm = document.querySelector('[name="minutes"]');

minuteForm.addEventListener('change', (e) => {
	if(e.target.value.trim() == ''){
		return;
	}
	clearCountdown();
	restartTimer(e.target.value * 60)
});

timerButton.forEach((button) => {
	button.addEventListener('click', (e) => {
		clearCountdown();
		restartTimer(e.target.dataset.time);
	});
});

//clears the interval and resets the view content
const clearCountdown = () => {
	clearInterval(countdown);
	timerDisplay.textContent = '0:00'
}

//clears the interval, resets view content, restarts timer with new time
const restartTimer = (time) => {
	clearCountdown();
	timer(time);
}

//starts the timer
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

//handles changing the view
function displayTimeLeft(secondsLeft){
	const minutes = Math.floor(secondsLeft / 60);
	const seconds = secondsLeft % 60;
	const display = `${minutes}:${seconds}`
	timerDisplay.textContent = display;
}