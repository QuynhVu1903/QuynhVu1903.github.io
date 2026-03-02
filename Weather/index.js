async function searchWeather() {
    const city = document.getElementById("inputWeather").value;
    const appid = '09a71427c59d38d6a34f89b47d75975c';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${appid}&units=metric`;


    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod !== "200") {
            alert("Không tìm thấy thành phố");
            return;
        }
        displayWeather(data.list);

    }
    catch (error) {
        alert("Lỗi: " + error);
    }
}

function displayWeather(list) {
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
    const iconBox = document.getElementById("place");
    iconBox.innerHTML = "";
    // gán Icon
    const divIcon = document.createElement("div");
    divIcon.classList.add("divIcon");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-location-dot");
    divIcon.appendChild(icon);
    //gán City
    const divCity = document.createElement("div");
    divCity.classList.add("divCity");
    const cityInput = document.getElementById("inputWeather").value;
    divCity.textContent = cityInput;
    // Gộp Icon và City
    iconBox.appendChild(divIcon);
    iconBox.appendChild(divCity);

    // xem lại đoạn này
}