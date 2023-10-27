
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

const card_count_button = document.querySelectorAll(".custom-button");
const card_count_save = document.querySelector("#cart-count");
let count = 0;

card_count_button.forEach(function(button) {
    button.addEventListener("click", function() {
        count++;
        card_count_save.textContent = count;
    });
});



// ......................................................................................

$(document).ready(function() {
    $(".select-food").change(function() {
        var selected = $(this).val().toLowerCase();
        var select_food = $(".select-food-card");
        var call = select_food.find(".css-item, .text-food");
        if (selected === "") {
            call.show();
        } else {
            call.hide();
            call.filter("[data-food ='" + selected + "']").show();
        }
    });
});



// ......................................................................................
function showAlert() {
    alert('Cảm ơn bạn đã đến với nhà hàng.');
    window.location.href = '../home/home.html';
}

