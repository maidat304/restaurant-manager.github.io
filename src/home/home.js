document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.btn-toggle');
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const spn2 = toggleButton.querySelector('.spn2');

    // Thay đổi biểu tượng dựa trên darkMode ban đầu
    spn2.innerHTML = darkMode ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';

    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-theme');
        localStorage.setItem('darkMode', isDarkMode);

        // Thay đổi biểu tượng khi chuyển đổi chế độ tối/sáng
        spn2.innerHTML = isDarkMode ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    });

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
    function handleResize() {
        if (window.innerWidth <= 768) {
            hideSidebar();
        } else {
            showSidebar();
        }
    }
    // Gọi hàm handleResize khi trang web được tải và khi kích thước màn hình thay đổi
    window.addEventListener('DOMContentLoaded', handleResize);
    window.addEventListener('resize', handleResize);
});