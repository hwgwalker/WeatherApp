const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.location')
const desc = document.querySelector('.temp-description')
const temp = document.querySelector('.temp-degree')
const icon = document.querySelector('.icon-section')

button.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=ef04db9d9dae1ed88375ace9eec79441`)
        .then(function (response) {
            return response.json();
        })
        .then(data => {
            const nameValue = data['name'];
            const tempValue = data['main']['temp'];
            const descValue = data['weather'][0]['description'];
            const iconValue = data['weather'][0]['icon'];

            name.innerHTML = nameValue;
            temp.innerHTML = `${Math.floor(tempValue)}&#8451;`;
            desc.innerHTML = descValue;
            icon.src = `https://openweathermap.org/img/wn/${iconValue}@4x.png`;
        })


        .catch(err => alert('Invalid city!'))
})
