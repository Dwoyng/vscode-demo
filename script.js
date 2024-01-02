
function login() {
    var c1 = document.getElementById("c1").value;
    var c2 = document.getElementById("c2").value;
    var c3 = document.getElementById("c3").value;
    // Thực hiện kiểm tra tài khoản và mật khẩu ở đây
    // (Có thể sử dụng AJAX để gửi thông tin đăng nhập đến máy chủ và kiểm tra bằng server-side code)

    // Ví dụ đơn giản: Kiểm tra nếu username là "admin" và password là "password"
    if ((c1 === "Khánh"||c1==="anh Khánh"||c1==="Hồ Quốc Khánh") && c2==="Trang"&& c3==="Chíp" ) {
        window.location.href = "https://dwoyng.github.io/Project-demo/";
    } else {
        alert("Làm lại đi sai hết rồi :)))");
    }
}


