function startTimer(duration, display) {
    let timer = duration;
    let minutes, seconds;

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            alert("Время вышло!");
        }
    }, 1000);
}

window.onload = function () {
    const timerDisplay = document.querySelector("#timer");
    const duration = 60 * 5; // 5 минут в секундах

    startTimer(duration, timerDisplay);
};
