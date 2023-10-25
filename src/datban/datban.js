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

  var check_phone = /^[0-9]+$/; // Chỉ cho phép nhập dãy số
  var check_name = /^[A-Za-z\s]+$/; // Biểu thức chính quy kiểm tra họ và tên không chứa số và không để trống

  // Biểu thức chính quy kiểm tra kiểu bàn
  var type_options = ["Bàn 2 người", "Bàn 5 người", "Bàn 6 người"];
  var check_type = new RegExp("^(" + type_options.map(option => escapeRegExp(option)).join("|") + ")$");

  // Biểu thức chính quy kiểm tra mã số bàn
  var type_number_options = [
      "1", "2", "3", "4", "5", "6",
  ];
  var check_type_number = new RegExp("^(" + type_number_options.map(option => escapeRegExp(option)).join("|") + ")$");

  // Hàm định nghĩa để tránh lỗi về các ký tự đặc biệt trong biểu thức chính quy
  function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function validate(form) {
      var phone = form.phone.value.trim();
      var name = form.name.value.trim();
      var type = form.type.value;
      var typeNumber = form["type-number"].value;
      var date = form.date.value;
      var time = form.time.value;
      var errors = [];

      if (name === "") {
          errors.push("Bạn phải nhập họ tên!");
      } else if (!check_name.test(name)) {
          errors.push("Họ tên không hợp lệ!");
      }

      if (phone === "") {
          errors.push("Bạn phải nhập số điện thoại!");
      } else if (!check_phone.test(phone)) {
          errors.push("Số điện thoại không hợp lệ!");
      }

      if (!check_type.test(type)) {
          errors.push("Vui lòng chọn kiểu bàn từ danh sách!");
      }

      if (!check_type_number.test(typeNumber)) {
          errors.push("Vui lòng chọn mã số bàn từ danh sách!");
      }

      if (date === "") {
          errors.push("Vui lòng nhập lịch đặt!");
      }

      if (time === "") {
          errors.push("Vui lòng nhập khung giờ!");
      }

      if (errors.length > 0) {
          reportErrors(errors);
          return false;
      }
      alert("Đã gửi đi thành công!");
      return true;

      function reportErrors(errors) {
          var information = "Vui lòng nhập đẩy đủ thông tin!\n";
          for (var i = 0; i < errors.length; i++) {
              var numError = i + 1;
              information += "\n" + numError + ". " + errors[i];
          }
          alert(information);
      }
  }