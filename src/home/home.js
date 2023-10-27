
function darkmode_function() {
    const darkmode = document.getElementById('mode-icon');
    if (darkmode.classList.contains('bi-moon')) {
        darkmode.classList.remove('bi-moon');
        darkmode.classList.add('bi-sun');
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', '0');
    } else {
        darkmode.classList.remove('bi-sun');
        darkmode.classList.add('bi-moon');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', '1');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const darkmode = document.getElementById('mode-icon');
    const save = localStorage.getItem('darkMode');

    if (save === '0') {
        darkmode.classList.remove('bi-moon');
        darkmode.classList.add('bi-sun');
        document.body.classList.add('dark-mode');
    }
});


// ......................................................................................

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);
targetDate.setHours(targetDate.getHours() + 20);
targetDate.setMinutes(targetDate.getMinutes() + 30);
targetDate.setSeconds(targetDate.getSeconds() + 30);

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.getElementById('days').textContent = '0 ngày';
        document.getElementById('hours').textContent = '0 giờ';
        document.getElementById('minutes').textContent = '0 phút';
        document.getElementById('seconds').textContent = '0 giây';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = `${days} ngày`;
        document.getElementById('hours').textContent = `${hours} giờ`;
        document.getElementById('minutes').textContent = `${minutes} phút`;
        document.getElementById('seconds').textContent = `${seconds} giây`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
"use strict";


// ......................................................................................


function showAlert() {
    alert('Cảm ơn bạn đã đến với nhà hàng.');
    window.location.href = '../home/home.html';

}
document.addEventListener("DOMContentLoaded", function() {
    const xemthem = document.getElementById("xemthem");
    const thugon = document.getElementById("thugon");
    const click_button = document.getElementById("click_button");


    xemthem.addEventListener("click", toggleElements);
    thugon.addEventListener("click", toggleElements);

    function toggleElements() {
        xemthem.style.display = xemthem.style.display === "none" ? "block" : "none";
        thugon.style.display = thugon.style.display === "none" ? "block" : "none";
        click_button.style.display = click_button.style.display === "none" ? "block" : "none";
    }
});

