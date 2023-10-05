const toggleButton = document.querySelector('.btn-toggle');
const icon = toggleButton.querySelector('.bi');
const toggleSidebarButton = document.querySelector('.btn-toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

// Hàm để thay đổi trạng thái và biểu tượng
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    icon.classList.toggle('bi-brightness-high-fill', isDarkMode);
    icon.classList.toggle('bi-moon-stars-fill', !isDarkMode);
    toggleButton.querySelector('.spn2').textContent = isDarkMode ? 'LIGHT' : 'DARK';
    localStorage.setItem('darkMode', isDarkMode);
}

// Lấy trạng thái từ Local Storage hoặc mặc định là sáng
const darkMode = localStorage.getItem('darkMode') === 'true';
toggleButton.querySelector('.spn2').textContent = darkMode ? 'LIGHT' : 'DARK';
toggleButton.addEventListener('click', toggleTheme);
icon.classList.toggle('bi-brightness-high-fill', darkMode);
icon.classList.toggle('bi-moon-stars-fill', !darkMode);

// Hàm để ẩn thanh sidebar
function hideSidebar() {
    sidebar.classList.add('sidebar-hidden');
}

// Hàm để hiện thanh sidebar
function showSidebar() {
    sidebar.classList.remove('sidebar-hidden');
}

// Bắt sự kiện khi nút được nhấp
toggleSidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-hidden');
});

// Bắt sự kiện khi kích thước màn hình thay đổi
function handleResize() {
    if (window.innerWidth <= 768) {
        hideSidebar();
    } else {
        showSidebar();
    }
}

window.addEventListener('scroll', () => {
    sidebar.style.top = window.scrollY + 'px';
});

window.addEventListener('resize', handleResize);
handleResize(); // Gọi nó một lần để cài đặt ban đầu