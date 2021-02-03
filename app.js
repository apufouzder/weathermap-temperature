const inputValue = document.getElementById("input-value");
document.getElementById("button").addEventListener("click", function(){
    getWeatherTemp();
})

function getWeatherTemp(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=5954da92492accf59925801ff9ea7014')
        .then(res => res.json())
        .then(data => {
            const nameValue = data.name;
            const main = data.main;
            const temp = main.temp;

            let inputValue = document.getElementById("input-value").value;
            inputValue = document.getElementById("input-value").value = "";

            inputValue.value = "";
            document.getElementById("temp").innerText = temp;
            document.getElementById("city-name").innerText = nameValue;
            document.getElementById("weather-icon").setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            //console.log(data);
            // console.log(temp);
            
        })
        .catch(error => alert('You type wrung city!'))
}