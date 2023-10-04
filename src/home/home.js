const toggleButton = document.querySelector('.btn-toggle');

toggleButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkMode', isDarkMode);
    toggleButton.querySelector('.spn2').textContent = isDarkMode ? 'LIGHT' : 'DARK';
    // Thay đổi biểu tượng và văn bản
    if (!isDarkMode) {
        toggleButton.querySelector('.bi').classList.remove('bi-brightness-high-fill');
        toggleButton.querySelector('.bi').classList.add('bi-moon-stars-fill');
    } else {
        toggleButton.querySelector('.bi').classList.remove('bi-moon-stars-fill');
        toggleButton.querySelector('.bi').classList.add('bi-brightness-high-fill');
    }
});

const darkMode = localStorage.getItem('darkMode') === 'true';
document.body.classList.toggle('dark-theme', darkMode);

const sidebar = document.querySelector('.sidebar');
window.addEventListener('scroll', () => {
    sidebar.style.top = window.scrollY + 'px';
});


// code mới 
const toggleSidebarButton = document.querySelector('.btn-toggle-sidebar');

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
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        hideSidebar();
    } else {
        showSidebar();
    }
});

// Đảm bảo rằng ban đầu thanh sidebar được ẩn khi màn hình nhỏ
if (window.innerWidth <= 768) {
    hideSidebar();
} else {
    showSidebar();
}