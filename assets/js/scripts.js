const searchBtn = document.getElementById('search');
const ranNon = document.getElementById('ranNon');
const drinkSection = document.getElementById('cocktail');
var cocktailIngr = document.getElementById('cocktailIngr');
var currentCocktailSearch = [];

// creates cards for cocktails
function createCard(cocktailName, ingredients) {
    // var elementLi = document.createElement('li');
    // elementLi.textContent = cocktailName;
    // cocktailIngr.appendChild(elementLi);
    var divRow = document.createElement('div');
    divRow.classList.add('row');
    var divCol = document.createElement('div');
    divCol.classList.add('col', 's12', 'm6');
    var divCard = document.createElement('div');
    divCard.classList.add('card', 'blue-grey', 'darken-1');
    var divCont = document.createElement('div');
    divCont.classList.add('card-content', 'white-text');
    var divTitle = document.createElement('span');
    divTitle.classList.add('card-title');
    divTitle.textContent = cocktailName;
    divTitle.setAttribute('value', cocktailName);
    divTitle.addEventListener('click', function(e){
        e.preventDefault();
        console.log(e.target.innerText);
        for (let index = 0; index < currentCocktailSearch.length; index++) {
            const element = currentCocktailSearch[index];
            if (element.name === e.target.innerText) {
                console.log(element);
                // create card with ingredients
            }
        }
    })
    cocktailIngr.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divCard);
    divCard.appendChild(divCont);
    divCont.appendChild(divTitle);

}


// function to get random drink by ingredient user selects
function getDrink() {
    var userIngr = document.getElementById('ingredientType').value
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
        currentCocktailSearch = [];
        currentCocktailSearch = data.body[0];
        console.log(currentCocktailSearch);
        $(cocktailIngr).empty();
        var cocktails = data.body[0];
        var numCocktails = cocktails.length <= 5 ? cocktails.length : 5;
        for (var i = 0; i < numCocktails; i++) {
        createCard(cocktails[i].name, cocktails[i].ingredients);
        }
        // var cocktailName = `${data.body[i].name}`
        // console.log(cocktailName);
        
    })
    .catch(err => {
        console.error(err);
    });
}
searchBtn.addEventListener('click',getDrink);



// // function to get alcoholic drink
// function getAlcDrink() {
//     fetch("https://cocktails3.p.rapidapi.com/random", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "cocktails3.p.rapidapi.com",
//             "x-rapidapi-key": "7cdce6aa00mshb6271779e3ce1f6p1cdc87jsn64cadd3d366d"
//         }
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data){
//         drinkSection.innerHTML = '';
//         drinkIngr.innerHTML = '';
//         console.log(data);
//         for (var i = 0; i < data.body[0].length; i++);
//         var cocktailName = `${data.body[i].name}`
//         var cocktailIngredients = `${data.body[i].ingredients}`
//         console.log(cocktailName);
//         console.log(cocktailIngredients);
//         var h3 = document.createElement('h3');
//         var ingrLi = document.createElement('li')
//         h3.innerHTML = cocktailName;
//         ingrLi.innerHTML = cocktailIngredients;
//         drinkIngr.appendChild(ingrLi);
//         drinkSection.appendChild(h3);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }


// ranAlco.addEventListener('click', getAlcDrink);