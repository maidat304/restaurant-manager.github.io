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
          toggleMode(); // Call the toggleMode function to set the dark mode.
      }
  });



  // Biểu thức chính quy kiểm tra email và số điện thoại
  var check_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var check_phone = /^[0-9]+$/; // Cho phép nhập dãy số
  var check_name = /^[A-Za-z\s]+$/; // Biểu thức chính quy kiểm tra họ và tên không được chứa số và không được để trống

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
      return true;
  }

  function reportErrors(errors) {
      var information = "Vui lòng nhập đẩy đủ thông tin!\n";
      for (var i = 0; i < errors.length; i++) {
          var numError = i + 1;
          information += "\n" + numError + ". " + errors[i];
      }
      alert(information);
  }