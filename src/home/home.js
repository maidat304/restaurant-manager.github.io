        // Hàm chuyển đổi chế độ sáng/tối
        function toggleMode() {
            const modeIcon = document.getElementById('mode-icon');
            if (modeIcon.classList.contains('bi-moon')) {
                // Chuyển sang chế độ tối
                modeIcon.classList.remove('bi-moon');
                modeIcon.classList.add('bi-sun');
                // Thêm lớp dark cho body hoặc container chứa nội dung
                document.body.classList.add('dark-mode');
            } else {
                // Chuyển sang chế độ sáng
                modeIcon.classList.remove('bi-sun');
                modeIcon.classList.add('bi-moon');
                // Loại bỏ lớp dark
                document.body.classList.remove('dark-mode');
            }
        }