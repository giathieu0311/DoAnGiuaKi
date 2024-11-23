let currentPage = 1;

// Cập nhật trạng thái nút và giao diện
function updatePagination() {
  // Bỏ active khỏi tất cả trang
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`page-${i}`).classList.remove("active");
  }

  // Thêm active cho trang hiện tại
  document.getElementById(`page-${currentPage}`).classList.add("active");

  // Vô hiệu hóa hoặc kích hoạt nút Previous
  if (currentPage === 1) {
    document.getElementById("prev").classList.add("disabled");
    document.getElementById("prev").querySelector("a").setAttribute("aria-disabled", "true");
  } else {
    document.getElementById("prev").classList.remove("disabled");
    document.getElementById("prev").querySelector("a").removeAttribute("aria-disabled");
  }

  // Vô hiệu hóa hoặc kích hoạt nút Next
  if (currentPage === 3) {
    document.getElementById("next").classList.add("disabled");
    document.getElementById("next").querySelector("a").setAttribute("aria-disabled", "true");
  } else {
    document.getElementById("next").classList.remove("disabled");
    document.getElementById("next").querySelector("a").removeAttribute("aria-disabled");
  }
}

// Xử lý sự kiện Next
document.getElementById("next").addEventListener("click", function (event) {
  event.preventDefault();
  if (currentPage < 3) {
    currentPage++;
    updatePagination();
  }
});

// Xử lý sự kiện Previous
document.getElementById("prev").addEventListener("click", function (event) {
  event.preventDefault();
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

// Xử lý khi người dùng nhấn trực tiếp vào số trang
for (let i = 1; i <= 3; i++) {
  document.getElementById(`page-${i}`).addEventListener("click", function (event) {
    event.preventDefault();
    currentPage = i;
    updatePagination();
  });
}

// Khởi tạo trạng thái ban đầu
updatePagination();
