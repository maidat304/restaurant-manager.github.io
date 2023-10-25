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
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1); // Thêm 1 ngày
targetDate.setHours(targetDate.getHours() + 20); // Thêm 20 giờ
targetDate.setMinutes(targetDate.getMinutes() + 30); // Thêm 30 phút
targetDate.setSeconds(targetDate.getSeconds() + 30); // Thêm 30 giây

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        document.getElementById('days').textContent = '0 ngày';
        document.getElementById('hours').textContent = '0 giờ';
        document.getElementById('minutes').textContent = '0 phút';
        document.getElementById('seconds').textContent = '0 giây';
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = `${days} ngày`;
        document.getElementById('hours').textContent = `${hours} giờ`;
        document.getElementById('minutes').textContent = `${minutes} phút`;
        document.getElementById('seconds').textContent = `${seconds} giây`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

//