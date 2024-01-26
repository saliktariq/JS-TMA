function startCountdown(targetDate) {
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (distance < 0) {
            clearInterval(countdown);
            console.log("Countdown finished!");
        }
    }, 1000);
}

