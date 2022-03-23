var searchBtn = document.getElementById('search');
var randoDrink = document.getElementById('randoDrink');
var cocktailTitle = document.getElementById('cocktailTitle');

// pulls last searched drink ingredient
function searchedDrink() {
    var userIngredient = localStorage.getItem('searchedIngredient');
    console.log(userIngredient);
    createCard(userIngredient);
}

// creates cards for cocktails
function createCard(cocktailName, ingredients) {
    // creates card for cocktail name
    var mainDiv = document.createElement('div');
    mainDiv.classList.add('row')
    var divCard = document.createElement('div');
    divCard.classList.add('names', 'col', 's12', 'm4', 'card', 'indigo', 'darken-4');
    var divCont = document.createElement('div');
    divCont.classList.add('card-content', 'white-text');
    var divTitle = document.createElement('span');
    divTitle.textContent = cocktailName;
    divTitle.setAttribute('value', cocktailName);


    mainDiv.appendChild(divCard);
    divCard.appendChild(divCont);
    divCont.appendChild(divTitle);

    // creates card for ingredients
    var divCard2 = document.createElement('div');
    divCard2.classList.add('ingreds', 'col', 's12', 'm8', 'card', 'black');
    var divCont2 = document.createElement('div');
    divCont2.classList.add('card-content', 'white-text');
    var divTitle2 = document.createElement('span');
    divTitle2.textContent = ingredients;
    
    

    mainDiv.appendChild(divCard2);
    divCard2.appendChild(divCont2);
    divCont2.appendChild(divTitle2);

    mainDiv.style.display = 'flex';
    cocktailTitle.appendChild(mainDiv);
}


// function to get drinks by ingredient user selects
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
        $(cocktailTitle).empty();
        var cocktails = data.body[0];
        var numCocktails = cocktails.length <= 5 ? cocktails.length : 5;
        for (var i = 0; i < numCocktails; i++) {
        createCard(cocktails[i].name, cocktails[i].ingredients);
        }
    })
    .catch(err => {
        console.error(err);
    });
}

// function to get random alcoholic drink
function getRandoDrink() {
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
        cocktailTitle.innerHTML = ''
        // get information about random cocktail
        for (var i = 0; i < data.body[0].length; i++);
        var cocktailName = `${data.body[i].name}`
        var cocktailIngredients = `${data.body[i].ingredients}`
        // creating html elements for pulled data
        var ranDiv = document.createElement('div');
        ranDiv.classList.add('randoInfo')
        var h3 = document.createElement('h3');
        var ingrLi = document.createElement('p')
        h3.innerHTML = cocktailName;
        ingrLi.innerHTML = cocktailIngredients;
        
        ranDiv.appendChild(h3);
        h3.appendChild(ingrLi);
        cocktailTitle.appendChild(ranDiv);
        
    })
    .catch(err => {
        console.error(err);
    });
}

searchBtn.addEventListener('click', getDrink);
randoDrink.addEventListener('click', getRandoDrink)


searchedDrink();