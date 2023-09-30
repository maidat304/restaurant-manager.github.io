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

// Hàm lấy trạng thái chế độ (theme) từ localStorage hoặc theo chế độ mặc định
function getTheme() {
    return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

// Hàm thiết lập chế độ (theme) và cập nhật nút chuyển đổi trạng thái
function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);

    // Lấy phần tử nút chuyển đổi theme
    const themeToggle = document.querySelector("[data-theme-toggle]");

    // Cập nhật nội dung của nút chuyển đổi theme
    if (theme === "dark") {
        themeToggle.textContent = "LIGHT";
    } else {
        themeToggle.textContent = "DARK";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.querySelector("[data-theme-toggle]");

    themeToggle.addEventListener("click", () => {
        const currentTheme = getTheme();
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });

    setTheme(getTheme());
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