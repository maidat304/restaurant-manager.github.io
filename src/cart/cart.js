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
var check_phone = /^[0-9]+$/;
var check_name = /^[\p{L}\s]+$/u;

function validate(form) {
    var address = form.address.value;
    var phone = form.phone.value;
    var name = form.name.value;
    var errors = [];
    if (!check_name.test(name)) {
        errors.push("Bạn phải nhập họ tên hợp lệ!");
    }

    if (!check_phone.test(phone)) {
        errors.push("Bạn phải nhập số điện thoại hợp lệ!");
    }
    if (address == "") {
        errors.push("Bạn vui lòng nhập địa chỉ!");
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }
    alert('THANH TOÁN THÀNH CÔNG!');
    return true;
}

function reportErrors(errors) {
    var information = "Vui lòng nhập đầy đủ thông tin để nhận mã!\n";
    for (var i = 0; i < errors.length; i++) {
        var numError = i + 1;
        information += "\n" + numError + ". " + errors[i];
    }
    alert(information);
}