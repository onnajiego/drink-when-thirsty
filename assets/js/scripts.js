const searchBtn = document.querySelector('button');

// function to get random drink by ingredient user selects
// function getDrink() {
//     var userIngr = document.getElementById('ingredient').value
//     fetch("https://cocktails3.p.rapidapi.com/search/byingredient/" + userIngr, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "cocktails3.p.rapidapi.com",
//             "x-rapidapi-key": "7cdce6aa00mshb6271779e3ce1f6p1cdc87jsn64cadd3d366d"
//         }
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }
function getDrink() {
    fetch("https://cocktails3.p.rapidapi.com/random", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cocktails3.p.rapidapi.com",
            "x-rapidapi-key": "7cdce6aa00mshb6271779e3ce1f6p1cdc87jsn64cadd3d366d"
        }
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        for (var i = 0; i < data.body[0].length; i++);
        var cocktailName = `${data.body[i].name}`
        console.log(cocktailName);
    })
    .catch(err => {
        console.error(err);
    });
}

searchBtn.addEventListener('click', getDrink);