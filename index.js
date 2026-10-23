let clock = document.getElementById("clock");

function showTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Determine AM or PM
    let am_pm = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;

    clock.textContent = currentTime;
}

// Display immediately, then update every second
showTime();
setInterval(showTime, 1000);
