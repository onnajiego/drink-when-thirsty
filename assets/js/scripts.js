const searchBtn = document.querySelector('button');

function getDrink() {
    var userIngr = document.getElementById('ingredient').value
    console.log(userIngr);
    fetch("https://cocktails3.p.rapidapi.com/search/byingredient/" + userIngr, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cocktails3.p.rapidapi.com",
            "x-rapidapi-key": "7cdce6aa00mshb6271779e3ce1f6p1cdc87jsn64cadd3d366d"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
}

searchBtn.addEventListener('click', getDrink);