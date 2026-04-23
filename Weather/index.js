async function searchWeather() {
    const city = document.getElementById("inputWeather").value;
    const appid = '09a71427c59d38d6a34f89b47d75975c';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&units=metric`;


    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== "200") {
            alert("Không tìm thấy thành phố!");
            return;
        }
        displayWeather(data.list, data.city);

    }
    catch (error) {
        alert("Lỗi: " + error);
    }
}

function displayWeather(list, city) {
    const container = document.getElementById("weatherContainer");
    container.innerHTML = "";

    list.forEach(item => {
        // với mỗi item sễ tạo ra 1 card mới
        const card = document.createElement("div");
        card.classList.add("cardWeather");
        // card sẽ in ra với nội dung lấy từ mỗi item - là phần tử object của mảng list
        card.innerHTML = `
        <div class="divCard">
        <div class="pDiv"><p>${item.dt_txt}</p></div>
        <div class="box2">
        <div class="left">
            
            <div class="h2Div"><h2>${item.main.temp}°C</h2></div>
            <div class="p2Div"><p>${item.weather[0].description}</p></div>
        </div>
        <div class="right">
            <img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png">
        </div>
        </div>
        </div>
        `;
        container.appendChild(card);
    });

    //tạo thêm icon và tên thành phố
    //tên thành phố đã lấy ở function trên nên số liệu có thể bị thay đổi khi chạy
    // nên lấy data từ mảng
    const iconBox = document.getElementById("place");
    iconBox.innerHTML = `
    <div class="divIcon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
    </div>
    <div class="divCity">
        ${city.name}, ${city.country}
    </div>
    `;

}