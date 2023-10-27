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


function doiMau(button) {
    if (button.classList.contains("clicked")) {
        button.classList.remove("clicked");
    } else {
        button.classList.add("clicked");
    }
}

// ...............................................................................

var check_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var check_phone = /^[0-9]+$/;
var check_name = /^[\p{L}\s]+$/u;
var check_date = /^\d{4}-\d{2}-\d{2}$/;
var check_time = /^([01]\d|2[0-3]):[0-5]\d$/;
var check_number = /^(1[0-9]|20|[1-9])$/;

function validate(form) {
    var email = form.email.value;
    var phone = form.phone.value;
    var name = form.name.value;
    var date = form.date.value;
    var time = form.time.value;
    var number = form.number.value;
    var errors = [];
    if (!check_name.test(name)) {
        errors[errors.length] = "Bạn phải nhập họ và tên hợp lệ!";
    }
    if (!check_email.test(email)) {
        errors[errors.length] = "Bạn phải nhập email hợp lệ!";
    }

    if (!check_phone.test(phone)) {
        errors[errors.length] = "Bạn phải nhập số điện thoại hợp lệ!";
    }
    if (!check_date.test(date)) {
        errors.push("Vui lòng nhập ngày đặt hợp lệ!");
    }

    if (!check_time.test(time)) {
        errors.push("Vui lòng nhập giờ đặt hợp lệ!");
    }

    if (!check_number.test(number)) {
        errors.push("Số người từ 1 đến 20 người!");
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }


    showSuccessAndReload();

    return true;
}

function showSuccessAndReload() {
    alert('Đã đặt bàn thành công!');
    window.location.href = window.location.href;
}

function reportErrors(errors) {
    var information = "Vui lòng nhập đẩy đủ thông tin!\n";
    for (var i = 0; i < errors.length; i++) {
        var numError = i + 1;
        information += "\n" + numError + ". " + errors[i];
    }
    alert(information);
}