function login() {
    var username = document.getElementById("username").value;
   

    // Thực hiện kiểm tra tài khoản và mật khẩu ở đây
    // (Có thể sử dụng AJAX để gửi thông tin đăng nhập đến máy chủ và kiểm tra bằng server-side code)

    // Ví dụ đơn giản: Kiểm tra nếu username là "admin" và password là "password"
    if (username === "Trang" ) {
        window.location.href = "http://127.0.0.1:5501";
    } else {
        alert("Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu.");
    }
}


