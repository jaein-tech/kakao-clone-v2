const clockContainer = document.querySelector(".status-bar__clock");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockContainer.innerText = 
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
    getTime();z
    setInterval(getTime, 1000);
}

init();