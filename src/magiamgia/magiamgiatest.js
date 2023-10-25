// Hàm chuyển đổi chế độ sáng/tối
function toggleMode() {
    const modeIcon = document.getElementById('mode-icon');
    if (modeIcon.classList.contains('bi-moon')) {
        // Chuyển sang chế độ tối
        modeIcon.classList.remove('bi-moon');
        modeIcon.classList.add('bi-sun');
        // Thêm lớp dark cho body hoặc container chứa nội dung
        document.body.classList.add('dark-mode');
        // Lưu trạng thái chế độ tối vào localStorage
        localStorage.setItem('darkMode', 'true');
    } else {
        // Chuyển sang chế độ sáng
        modeIcon.classList.remove('bi-sun');
        modeIcon.classList.add('bi-moon');
        // Loại bỏ lớp dark
        document.body.classList.remove('dark-mode');
        // Lưu trạng thái chế độ sáng vào localStorage
        localStorage.setItem('darkMode', 'false');
    }
}

// Kiểm tra và thiết lập trạng thái chế độ tối khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    const modeIcon = document.getElementById('mode-icon');
    const storedDarkMode = localStorage.getItem('darkMode');

    if (storedDarkMode === 'true') {
        modeIcon.classList.remove('bi-moon');
        modeIcon.classList.add('bi-sun');
        document.body.classList.add('dark-mode');
    }
});
// 
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Biểu thức chính quy kiểm tra email và số điện thoại
var check_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var check_phone = /^[0-9]+$/;
var check_name = /^[A-Za-z\s]+$/;

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
// 
function validate4(form4) {
    var email4 = form4.email.value;
    var phone4 = form4.phone.value;
    var name4 = form4.name.value;
    var errors4 = [];
    if (!check_name.test(name4)) {
        errors4[errors4.length] = "Bạn phải nhập họ tên hợp lệ!";
    }
    if (!check_email.test(email4)) {
        errors4[errors4.length] = "Bạn phải nhập email hợp lệ!";
    }

    if (!check_phone.test(phone4)) {
        errors4[errors4.length] = "Bạn phải nhập sđt hợp lệ!";
    }

    if (errors4.length > 0) {
        reportErrors4(errors4);
        return false;
    }
    alert('Thành công! Chúng tôi sẽ gửi thông báo cho bạn trước 30p sự kiện! ')

    return true;
}

function reportErrors4(errors4) {
    var information4 = "Vui lòng nhập đẩy đủ thông tin để chúng tôi sẽ gửi thông báo cho bạn trước 30p sự kiện!\n";
    for (var i = 0; i < errors4.length; i++) {
        var numError = i + 1;
        information4 += "\n" + numError + ". " + errors4[i];
    }
    alert(information4);
}
// 
document.addEventListener("DOMContentLoaded", function() {
    const xemThemButton = document.getElementById("xemThemButton");
    const additionalDivs = document.getElementById("additionalDivs");

    // Bắt sự kiện khi nút "Xem thêm" được nhấn
    xemThemButton.addEventListener("click", function() {
        // Ẩn nút "Xem thêm"
        xemThemButton.style.display = "none";

        // Hiển thị các div bên dưới
        additionalDivs.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const xemThemButton = document.getElementById("xemThemButton");
    const thuGonButton = document.getElementById("thuGonButton");
    const additionalDivs = document.getElementById("additionalDivs");

    // Bắt sự kiện khi nút "XEM THÊM" được nhấn
    xemThemButton.addEventListener("click", function() {
        // Ẩn nút "XEM THÊM"
        xemThemButton.style.display = "none";

        // Hiển thị nút "THU GỌN"
        thuGonButton.style.display = "block";

        // Hiển thị các div bên dưới
        additionalDivs.style.display = "block";
    });

    // Bắt sự kiện khi nút "THU GỌN" được nhấn
    thuGonButton.addEventListener("click", function() {
        // Ẩn nút "THU GỌN"
        thuGonButton.style.display = "none";

        // Ẩn các div bên dưới
        additionalDivs.style.display = "none";

        // Hiển thị nút "XEM THÊM"
        xemThemButton.style.display = "block";
    });
});

// 

// code bỏ
let isNotificationOn = false; // Biến để theo dõi trạng thái

function change(button) {
    if (isNotificationOn) {
        // Nếu thông báo đã được bật, chuyển trạng thái trở lại và thay đổi nút
        button.innerHTML = "Bật thông báo";
        button.style.background = ""; // Xóa màu nền
    } else {
        // Nếu thông báo chưa bật, chuyển trạng thái và thay đổi nút
        button.innerHTML = "Đã bật thông báo!";
        button.style.background = "#15a4fa";
        alert("Bật thông báo thành công!");
    }

    // Đảo ngược trạng thái
    isNotificationOn = !isNotificationOn;
}

//