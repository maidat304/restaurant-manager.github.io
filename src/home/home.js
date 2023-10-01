// Hàm lưu trạng thái chế độ tối vào localStorage
function saveDarkModeState(isDarkMode) {
    localStorage.setItem('darkMode', isDarkMode);
}

// Hàm kiểm tra và áp dụng trạng thái chế độ tối từ localStorage khi trang được load
function loadDarkModeState() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-theme', darkMode);

    // Cập nhật nội dung của nút chuyển đổi theme
    const themeText = darkMode ? 'LIGHT' : 'DARK';
    btn.querySelector('.spn2').textContent = themeText;
}

// Lắng nghe sự kiện load trang và gọi hàm loadDarkModeState()
window.addEventListener('load', loadDarkModeState);

// Lấy button toggle chế độ tối
const btn = document.querySelector('.btn-toggle');

// Lắng nghe sự kiện click vào button để thay đổi trạng thái và lưu vào localStorage
btn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    saveDarkModeState(isDarkMode);

    // Cập nhật nội dung của nút chuyển đổi theme
    const themeText = isDarkMode ? 'LIGHT' : 'DARK';
    btn.querySelector('.spn2').textContent = themeText;
});

// Hàm thiết lập chế độ (theme) và cập nhật nút chuyển đổi trạng thái (giữ nguyên)
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

// Thiết lập chế độ tối/sáng mặc định và cập nhật nút chuyển đổi trạng thái (giữ nguyên)
function initializeTheme() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const currentTheme = darkMode ? 'dark' : 'light';
    setTheme(currentTheme);

    // Cập nhật nội dung của nút chuyển đổi theme
    const themeText = darkMode ? 'LIGHT' : 'DARK';
    btn.querySelector('.spn2').textContent = themeText;
}

// Gọi hàm initializeTheme để thiết lập chế độ tối/sáng khi trang được tải lên
initializeTheme();

// Lấy element thanh sidebar và lắng nghe sự kiện cuộn trang (đoạn code này giữ nguyên)
const sidebar = document.querySelector('.sidebar');
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    sidebar.style.top = scrollY + 'px';
});