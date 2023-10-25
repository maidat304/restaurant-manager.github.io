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

const buttons = document.querySelectorAll(".custom-button");
const cartCountElement = document.querySelector("#cart-count"); // Đảm bảo rằng bạn đang chọn đúng phần tử có ID là "cart-count"
let itemCount = 0;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        itemCount++;
        cartCountElement.textContent = itemCount;
    });
});





// jquery search https://www.w3schools.com/jquery/jquery_filters.asp

$(document).ready(function() {
    // Bắt sự kiện thay đổi ở cả hai dropdown
    $(".myInput, .myInput2").on("change", function() {
        var selectedCategory = $(".myInput").val().toLowerCase();
        if (selectedCategory == "") {
            // Hiển thị tất cả sản phẩm và text-food elements
            $(".myTable .css-item").show();
            $(".myTable .text-food").show();
        }
        // Lọc sản phẩm dựa trên lựa chọn danh mục
        else {
            $(".myTable .css-item").hide();
            $(".myTable .text-food").hide();
            $(".myTable .css-item[data-category='" + selectedCategory + "']").show();
            $(".myTable .text-food[data-category='" + selectedCategory + "']").show();
        }

    });
});


// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal
// Get the modal
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}