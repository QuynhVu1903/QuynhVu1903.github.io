// Khi Start lần đầu:
// startTime = bây giờ
// intervalId = bật vòng lặp
// Khi Pause:
// clearInterval
// intervalId = null
// giữ nguyên elapsedTime
// Khi Resume:
// startTime = bây giờ - elapsedTime
// bật lại interval
// Khi Reset:
// clearInterval
// elapsedTime = 0
// startTime = 0
// intervalId = null

// Khi Pause
// lapBtn.disabled = true;
// Khi Start
// lapBtn.disabled = false;


let startTime = 0;
let elapsedTime = 0; //thời gian đã trôi qua
let timerInterval;
let isRunning = false;
let lapCount = 0;
let lastLapTime = 0; // thời điểm lap trước để tính thời gian từng vòng

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");
const lapTableWrapper = document.getElementById("lapTableWrapper");

function formatTime(time) {
    let totalMilliseconds = Math.floor(time);

    let ms = Math.floor((totalMilliseconds % 1000) / 10); // 2 số ms
    let totalSeconds = Math.floor(totalMilliseconds / 1000);

    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    return (
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0') + ":" +
        String(ms).padStart(2, '0')
    );
    // string.padStart(targetLength, padString)
    // Tham số:

    // targetLength → Độ dài mong muốn của chuỗi sau khi thêm

    // padString (tuỳ chọn) → Chuỗi dùng để thêm vào đầu (mặc định là " ")
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
    // chạy realtime
    const currentLap = laps.firstChild;
    if (currentLap) {

        const lapTime = elapsedTime - lastLapTime;
        // tìm cột Time của lap hiện tại để thay nội dung bằng thời gian mới
        currentLap.children[1].textContent = formatTime(lapTime);
        currentLap.children[2].textContent = formatTime(elapsedTime);

    }
}


function createLap() {

    lapCount++;

    lapTableWrapper.classList.remove("hidden");

    const tr = document.createElement("tr");
    // tr.className = "hover:bg-gray-800 transition-colors";
    tr.className = "odd:bg-gray-900 even:bg-gray-800 hover:bg-indigo-900 transition-colors";

    tr.innerHTML = `
        <td class="px-6 py-3 text-gray-400 text-center font-semibold">${lapCount}</td>
        <td class="px-6 py-3 text-white font-mono text-center text-base">00:00:00</td>
        <td class="px-6 py-3 text-indigo-400 font-mono text-center text-base">${formatTime(elapsedTime)}</td>
    `;
    // Thêm vào đầu bảng (lap mới nhất hiện trên cùng)
    laps.prepend(tr);
}

startBtn.addEventListener("click", () => {

    if (!isRunning) { //nếu là true thì bắt đầu
        timerInterval = setInterval(updateTime, 10);
        startTime = Date.now() - elapsedTime;
        //chạy 5s
        // elapsedTime = 5000
        // startTime = Date.now() - elapsedTime;
        // vd:Date.now() = 10000
        // elapsedTime = 5000
        // =>startTime = 10000 - 5000 = 5000
        // Sau đó : Date.now() - startTime
        // = 10000 - 5000
        // = 5000


        // Cứ mỗi 10ms thì gọi hàm updateTime() một lần.
        //1 giây sẽ gọi khoảng 100 lần
        //Hiển thị được milliseconds, nếu để là 1000 thì chỉ nhìn thấy mỗi giây, k thấy ms

        isRunning = true; //cho bằng true
        startBtn.style.display = "none";
        pauseBtn.style.display = "flex";
        lapBtn.disabled = false;
        resetBtn.disabled = false;

        lapBtn.classList.remove("opacity-40", "cursor-not-allowed");
        resetBtn.classList.remove("opacity-40", "cursor-not-allowed");

        if (lapCount === 0) {
            createLap();
        }
    }
});

pauseBtn.addEventListener("click", () => {

    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startBtn.style.display = "block";
        pauseBtn.style.display = "none";
        lapBtn.disabled = true;

        lapBtn.classList.add("opacity-40", "cursor-not-allowed");
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    lapCount = 0;
    lastLapTime = 0;
    isRunning = false;
    display.textContent = "00:00:00";
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    lapBtn.disabled = true;
    lapBtn.classList.add("opacity-40", "cursor-not-allowed");
    resetBtn.disabled = true;
    resetBtn.classList.add("opacity-40", "cursor-not-allowed");
    // Xóa bảng
    laps.innerHTML = "";
    lapTableWrapper.classList.add("hidden");
});

lapBtn.addEventListener("click", () => {

    if (!isRunning) return;

    lastLapTime = elapsedTime;

    createLap();

});