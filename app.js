const inputValue = document.getElementById("input-value");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=5954da92492accf59925801ff9ea7014')
        .then(res => res.json())
        .then(data => {
            const nameValue = data.name;
            const main = data.main;
            const temp = main.temp;

            document.getElementById("temp").innerText = temp;
            console.log(data);
            console.log(temp);
        })
        .catch(error => alert('You type wrung city!'))
})