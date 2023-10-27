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
var check_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var check_phone = /^[0-9]+$/;
var check_name = /^[\p{L}\s]+$/u;

function validate(form) {
    var email = form.email.value;
    var phone = form.phone.value;
    var name = form.name.value;
    var errors = [];
    if (!check_name.test(name)) {
        errors[errors.length] = "Bạn phải nhập họ tên hợp lệ!";
    }
    if (!check_email.test(email)) {
        errors[errors.length] = "Bạn phải nhập email hợp lệ!";
    }
    if (!check_phone.test(phone)) {
        errors[errors.length] = "Bạn phải nhập sđt hợp lệ!";
    }
    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    } else {
        alert("Thank you for leaving a review!\nCảm ơn quý khách đã để lại đánh giá!");
        return true;
    }
}

function reportErrors(errors) {
    var information = "Vui lòng nhập đẩy đủ thông tin!\n";
    for (var i = 0; i < errors.length; i++) {
        var numError = i + 1;
        information += "\n" + numError + ". " + errors[i];
    }
    alert(information);
}
const ratingInputs = document.querySelectorAll('.rating input');
const feedbackText = document.getElementById('feedbackText');
ratingInputs.forEach(input => {
    input.addEventListener('change', updateFeedbackText);
});

function updateFeedbackText() {
    const checkedInput = document.querySelector('.rating input:checked');
    const ratingValue = checkedInput ? checkedInput.value : 0;
    const feedback = getFeedback(ratingValue);
    feedbackText.textContent = ` ${feedback}`;
}

function getFeedback(value) {
    switch (value) {
        case '5':
            return 'Rất hài lòng';
        case '4':
            return 'Hài lòng';
        case '3':
            return 'Trung bình';
        case '2':
            return 'Không hài lòng';
        case '1':
            return 'Rất không hài lòng';
        default:
            return '';
    }
}



//
function showAlert() {
    alert('Cảm ơn bạn đã đến với nhà hàng.');
    window.location.href = '../home/home.html';
}