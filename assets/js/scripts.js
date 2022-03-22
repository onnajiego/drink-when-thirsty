const searchBtn = document.getElementById('search');
const drinkSection = document.getElementById('cocktail');
var cocktailTitle = document.getElementById('cocktailTitle');
var ingredientUl = document.getElementById('ingredients');
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

    divTitle.addEventListener('click', nameIngredients);

    cocktailTitle.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divCard);
    divCard.appendChild(divCont);
    divCont.appendChild(divTitle);


    var divRow2 = document.createElement('div');
    divRow2.classList.add('row');
    var divCol2 = document.createElement('div');
    divCol2.classList.add('col', 's12', 'm6');
    var divCard2 = document.createElement('div');
    divCard2.classList.add('card', 'blue-grey', 'darken-1');
    var divCont2 = document.createElement('div');
    divCont2.classList.add('card-content', 'white-text');
    var divTitle2 = document.createElement('span');
    divTitle2.classList.add('card-title');
    divTitle2.textContent = ingredients;
    console.log(divTitle2);
    

    cocktailTitle.appendChild(divRow2);
    divRow2.appendChild(divCol2);
    divCol2.appendChild(divCard2);
    divCard2.appendChild(divCont2);
    divCont2.appendChild(divTitle2);


}

function nameIngredients(e) {
    e.preventDefault();
    console.log(e.target.innerText);
    for (let index = 0; index < currentCocktailSearch.length; index++) {
        const element = currentCocktailSearch[index];
        if (element.name === e.target.innerText) {
            console.log(element);
            // create card with ingredients
        }
    }
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
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
        $(cocktailTitle).empty();
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