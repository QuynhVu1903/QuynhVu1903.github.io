// ================== DIGITAL CLOCK ==================
function updateClock() {
  const now = new Date();

  // Lấy giờ, phút, giây
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Xác định AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Chuyển sang dạng 12 giờ
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 -> 12
  hours = hours.toString().padStart(2, "0");

  // Hiển thị chuỗi giờ hoàn chỉnh
  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Gắn vào phần tử có id="clock"
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    clockElement.textContent = timeString;
  }
}

// Cập nhật đồng hồ mỗi giây
setInterval(updateClock, 1000);

// Chạy ngay khi trang vừa load để không bị delay 1s
updateClock();


// ================== (TÙY CHỌN) SCROLL HIỆU ỨNG NHẸ ==================
// Nếu bạn muốn thanh menu mờ nhẹ khi cuộn xuống
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav.item2");
  if (nav) {
    if (window.scrollY > 30) {
      nav.style.backgroundColor = "rgba(223, 255, 226, 0.9)";
      nav.style.backdropFilter = "blur(6px)";
    } else {
      nav.style.backgroundColor = "#DFFFE2";
      nav.style.backdropFilter = "none";
    }
  }
});
