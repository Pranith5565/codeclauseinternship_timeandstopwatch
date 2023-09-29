// Timer
let timerInterval;
let timerRunning = false;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById("start-timer").textContent = "Pause";
    } else {
        timerRunning = false;
        clearInterval(timerInterval);
        document.getElementById("start-timer").textContent = "Resume";
    }
}

function stopTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    document.getElementById("start-timer").textContent = "Start";
}

function resetTimer() {
    timerRunning = false;
    clearInterval(timerInterval);
    timerSeconds = 0;
    timerMinutes = 0;
    timerHours = 0;
    updateTimerDisplay();
    document.getElementById("start-timer").textContent = "Start";
}

function updateTimer() {
    timerSeconds++;
    if (timerSeconds == 60) {
        timerSeconds = 0;
        timerMinutes++;
        if (timerMinutes == 60) {
            timerMinutes = 0;
            timerHours++;
        }
    }
    updateTimerDisplay();
}

function updateTimerDisplay() {
    document.getElementById("timer-hours").textContent = pad(timerHours);
    document.getElementById("timer-minutes").textContent = pad(timerMinutes);
    document.getElementById("timer-seconds").textContent = pad(timerSeconds);
}

// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 1000);
        document.getElementById("start-stopwatch").textContent = "Pause";
    } else {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
        document.getElementById("start-stopwatch").textContent = "Resume";
    }
}

function stopStopwatch() {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
    document.getElementById("start-stopwatch").textContent = "Start";
}

function resetStopwatch() {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    stopwatchMinutes = 0;
    stopwatchHours = 0;
    updateStopwatchDisplay();
    document.getElementById("start-stopwatch").textContent = "Start";
}

function updateStopwatch() {
    stopwatchSeconds++;
    if (stopwatchSeconds == 60) {
        stopwatchSeconds = 0;
        stopwatchMinutes++;
        if (stopwatchMinutes == 60) {
            stopwatchMinutes = 0;
            stopwatchHours++;
        }
    }
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    document.getElementById("stopwatch-hours").textContent = pad(stopwatchHours);
    document.getElementById("stopwatch-minutes").textContent = pad(stopwatchMinutes);
    document.getElementById("stopwatch-seconds").textContent = pad(stopwatchSeconds);
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

document.getElementById("start-timer").addEventListener("click", startTimer);
document.getElementById("stop-timer").addEventListener("click", stopTimer);
document.getElementById("reset-timer").addEventListener("click", resetTimer);

document.getElementById("start-stopwatch").addEventListener("click", startStopwatch);
document.getElementById("stop-stopwatch").addEventListener("click", stopStopwatch);
document.getElementById("reset-stopwatch").addEventListener("click", resetStopwatch);
