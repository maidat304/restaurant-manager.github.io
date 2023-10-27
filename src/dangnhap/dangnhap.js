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
function toggleEYE() {
    const modeIcon = document.getElementById('mode-EYE');
    const passwordField = document.getElementById('passwordField');

    if (modeIcon.classList.contains('bi-eye')) {
        modeIcon.classList.remove('bi-eye');
        modeIcon.classList.add('bi-eye-slash');
        passwordField.type = 'text';
    } else {
        modeIcon.classList.remove('bi-eye-slash');
        modeIcon.classList.add('bi-eye');
        passwordField.type = 'password';
    }
}

const sampleUsername = 'tai_khoan_mau';
const samplePassword = 'mat_khau_mau';

const usernameInput = document.querySelector('.input-field[type="text"]');
const passwordInput = document.querySelector('.input-field[type="password"]');
const loginButton = document.querySelector('.button3');

usernameInput.value = sampleUsername;
passwordInput.value = samplePassword;

loginButton.addEventListener('click', function() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === sampleUsername && enteredPassword === samplePassword) {
        alert('Đăng nhập thành công.');
        window.location.href = '../home/home.html';
    } else {
        alert('Thông tin đăng nhập sai. Vui lòng kiểm tra lại tài khoản và mật khẩu.');
    }
});

function showAlert() {
    alert('Cảm ơn bạn đã đến với nhà hàng.');
    window.location.href = '../home/home.html';
}