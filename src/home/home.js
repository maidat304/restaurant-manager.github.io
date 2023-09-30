// Hàm lưu trạng thái chế độ tối vào localStorage
function saveDarkModeState(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode);
}

// Hàm kiểm tra và áp dụng trạng thái chế độ tối từ localStorage khi trang được load
function loadDarkModeState() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Lắng nghe sự kiện load trang và gọi hàm loadDarkModeState()
window.addEventListener('load', loadDarkModeState);

// Lấy button toggle chế độ tối
const btn = document.querySelector('.btn-toggle');

// Lắng nghe sự kiện click vào button để thay đổi trạng thái và lưu vào localStorage
btn.addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    saveDarkModeState(isDarkMode);
});
// Lấy element thanh sidebar
const sidebar = document.querySelector('.sidebar');

// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', function() {
    // Lấy vị trí cuộn trang
    const scrollY = window.scrollY;

    // Đặt top của thanh sidebar để di chuyển theo vị trí cuộn trang
    sidebar.style.top = scrollY + 'px';
});


//js cx vậy mn không sửa j hết nhá, viết tiếp vào thôi
// mn tạo folder như food và home nhé, xog ms tạo file như food vs home