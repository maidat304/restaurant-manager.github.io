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

// ...............................................................................

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
    }
    alert('Đã nhận mã thành công! Mã của bạn đã đươc gửi vào email và sđt cho bạn!')

    return true;
}

function reportErrors(errors) {
    var information = "Vui lòng nhập đẩy đủ thông tin để nhận mã!\n";
    for (var i = 0; i < errors.length; i++) {
        var numError = i + 1;
        information += "\n" + numError + ". " + errors[i];
    }
    alert(information);
}

// .......................................................................................
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

// 
function showAlert() {
    alert('Cảm ơn bạn đã đến với nhà hàng.');
    window.location.href = '../home/home.html';
}