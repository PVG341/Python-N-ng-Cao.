document.addEventListener("DOMContentLoaded", function () {
    const priceElements = document.querySelectorAll(".money");
    priceElements.forEach(el => {
        const rawPrice = parseInt(el.getAttribute("data-price")); // Lấy giá trị gốc
        const formattedPrice = new Intl.NumberFormat('vi-VN').format(rawPrice); // Định dạng
        el.textContent = `${formattedPrice} VNĐ`; // Cập nhật nội dung
    });
});

function toggleDropdown() {
    const dropdown = document.getElementById("user-dropdown");
    dropdown.classList.toggle("show"); // Hiển thị hoặc ẩn menu
}

// Ẩn menu dropdown khi click ra ngoài
window.onclick = function(event) {
    // Kiểm tra nếu click vào khu vực ngoài dropdown
    if (!event.target.closest('.user-icon-wrapper')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};