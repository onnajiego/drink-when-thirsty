const ranAlco = document.getElementById('ranAlco');
const ranNon = document.getElementById('ranNon');
const drinkSection = document.getElementById('cocktail');
const drinkIngr = document.getElementById('cocktailIngr');
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
//         for (var i = 0; i < data.body[0].length; i++);
//         var cocktailName = `${data.body[i].name}`
//         console.log(cocktailName);
        
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// function to get alcoholic drink
function getAlcDrink() {
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
        drinkSection.innerHTML = '';
        drinkIngr.innerHTML = '';
        console.log(data);
        for (var i = 0; i < data.body[0].length; i++);
        var cocktailName = `${data.body[i].name}`
        var cocktailIngredients = `${data.body[i].ingredients}`
        console.log(cocktailName);
        console.log(cocktailIngredients);
        var h3 = document.createElement('h3');
        var ingrLi = document.createElement('li')
        h3.innerHTML = cocktailName;
        ingrLi.innerHTML = cocktailIngredients;
        drinkIngr.appendChild(ingrLi);
        drinkSection.appendChild(h3);
    })
    .catch(err => {
        console.error(err);
    });
}

// function to get non-alcoholic beverage
function getNonDrink() {
    fetch("https://cocktails3.p.rapidapi.com/random/nonalcoholic", {
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
        drinkSection.innerHTML = '';
        drinkIngr.innerHTML = '';
        for (var i = 0; i < data.body[0].length; i++);
        var cocktailName = `${data.body[i].name}`
        var cocktailIngredients = `${data.body[i].ingredients}`
        console.log(cocktailName);
        console.log(cocktailIngredients);
        var h3 = document.createElement('h3');
        var ingrLi = document.createElement('li')
        h3.innerHTML = cocktailName;
        ingrLi.innerHTML = cocktailIngredients;
        drinkIngr.appendChild(ingrLi);
        drinkSection.appendChild(h3);
    })
    .catch(err => {
        console.error(err);
    });
}

ranNon.addEventListener('click', getNonDrink);
ranAlco.addEventListener('click', getAlcDrink);